import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { useGithubContext } from '@/providers'
import { faCircleNotch, faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  PostSummary,
  SearchLoadingContainer,
  SearchPostContainer
} from './styles'

const searchFormSchema = z.object({
  query: z.string().optional()
})

type SearchFormData = z.infer<typeof searchFormSchema>

export function SearchPost() {
  const contextProps = useGithubContext((context) => ({
    issues: context.issues,
    fetchIssuesFromRepo: context.fetchIssuesFromRepo
  }))

  const { issues, fetchIssuesFromRepo } = contextProps

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    watch,
    reset
  } = useForm<SearchFormData>({
    resolver: zodResolver(searchFormSchema)
  })

  const pluralPosts = issues.total > 1 ? 'publicações' : 'publicação'

  const input = watch('query')

  async function handleSearchIssue(data: SearchFormData) {
    await new Promise((resolve) => setTimeout(resolve, 300))
    await fetchIssuesFromRepo(data.query)
  }

  async function handleClearSearch() {
    handleSubmit(async () => {
      await fetchIssuesFromRepo()
    })()
    reset()
  }

  return (
    <SearchPostContainer>
      <PostSummary>
        <strong>Publicações</strong>
        <span>
          {issues.total} {pluralPosts}
        </span>
      </PostSummary>
      <form onSubmit={handleSubmit(handleSearchIssue)}>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          disabled={isSubmitting}
          {...register('query')}
        />

        {input && (
          <button type="button" onClick={handleClearSearch}>
            <FontAwesomeIcon icon={faClose} size="xs" />
            <span>limpar</span>
          </button>
        )}
      </form>

      {isSubmitting && (
        <SearchLoadingContainer>
          <FontAwesomeIcon icon={faCircleNotch} />
          <span>Buscando...</span>
        </SearchLoadingContainer>
      )}
    </SearchPostContainer>
  )
}
