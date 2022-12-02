import { SearchPost } from '@/components'
import IssueCard from '@/components/IssueCard'
import { Profile } from '@/components/Profile'
import { useGithubContext } from '@/providers'
import { Link } from 'react-router-dom'
import { BlogContainer, IssuesList } from './styles'

export function BlogPage() {
  const issues = useGithubContext((context) => context.issues)

  return (
    <BlogContainer>
      <Profile />

      <SearchPost />

      <IssuesList>
        {issues.items.map((item) => (
          <Link to={`/post/${item.id}`} key={item.id}>
            <IssueCard
              content={item.content}
              createdAt={item.createdAt}
              title={item.title}
            />
          </Link>
        ))}
      </IssuesList>
    </BlogContainer>
  )
}
