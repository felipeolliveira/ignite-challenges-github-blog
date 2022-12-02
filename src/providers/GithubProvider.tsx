import { api } from '@/lib/api'
import { AxiosError } from 'axios'
import { ReactNode, useCallback, useEffect, useState } from 'react'
import { createContext, useContextSelector } from 'use-context-selector'

interface User {
  login: string
  name: string
  bio: string
  followers: number
  blog: string
  avatarUrl: string
}

interface IssueItem {
  id: number
  title: string
  url: string
  createdAt: Date
  comments: number
  userLogin: string
  content: string
}

interface Issues {
  total: number
  items: IssueItem[]
}

interface GithubContextData {
  user: User | null
  issues: Issues
  fetchIssuesFromRepo: (query?: string) => Promise<void>
}

const GithubContext = createContext({} as GithubContextData)

interface GithubProviderProps {
  children: ReactNode
}

export function GithubProvider({ children }: GithubProviderProps) {
  const [user, setUser] = useState<User | null>(null)
  const [issues, setIssues] = useState<Issues>({
    items: [],
    total: 0
  })

  const fetchUserData = useCallback(async () => {
    await new Promise((resolve) => setTimeout(resolve, 300))

    try {
      const { data } = await api.get(`/users/felipeolliveira`)

      const { bio, login, name, followers, blog, avatar_url } = data

      setUser({ bio, login, name, followers, blog, avatarUrl: avatar_url })
    } catch (e) {
      if (e instanceof AxiosError) {
        if (e.response?.status === 403) {
          alert(
            'Estou usando a API pública do Github. Por favor, não exagere no recarregamento da página 😁'
          )
        } else {
          alert(
            'Não foi possível atualizar as informações do Felipe, recarregue a página'
          )
        }
      }
    }
  }, [])

  const fetchIssuesFromRepo = useCallback(async (query?: string) => {
    await new Promise((resolve) => setTimeout(resolve, 300))

    const queryToSearchIssues = query
      ? `${query} repo:felipeolliveira/ignite-challenges-github-blog`
      : `repo:felipeolliveira/ignite-challenges-github-blog`

    try {
      const { data } = await api.get('/search/issues', {
        params: {
          q: queryToSearchIssues
        }
      })

      const items = data.items.map((item: any) => ({
        id: item.number,
        url: item.html_url,
        title: item.title,
        createdAt: new Date(item.created_at),
        comments: item.comments,
        userLogin: item.user.login,
        content: item.body
      }))

      setIssues({
        total: data.total_count,
        items
      })
    } catch (e) {
      if (e instanceof AxiosError) {
        if (e.response?.status === 403) {
          alert(
            'Estou usando a API pública do Github. Por favor, não exagere no recarregamento da página 😁'
          )
        } else {
          alert(
            'Não foi possível atualizar as informações do Felipe, recarregue a página'
          )
        }
      }
    }
  }, [])

  useEffect(() => {
    fetchUserData()
    fetchIssuesFromRepo()
  }, [fetchUserData, fetchIssuesFromRepo])

  return (
    <GithubContext.Provider
      value={{
        user,
        issues,
        fetchIssuesFromRepo
      }}
    >
      {children}
    </GithubContext.Provider>
  )
}

export function useGithubContext<Select>(
  select: (value: GithubContextData) => Select
) {
  return useContextSelector(GithubContext, select)
}
