import { useGithubContext } from '@/providers'
import { relativeDateFormatter } from '@/utils'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faCircleNotch,
  faComment
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ReactMarkdown from 'react-markdown'
import { Link, useParams } from 'react-router-dom'
import {
  PostContainer,
  PostContent,
  PostHeader,
  PostLoadingContent,
  PostTraits
} from './styles'

export function PostPage() {
  const { postId } = useParams()
  const contextData = useGithubContext((context) => ({
    issues: context.issues,
    fetchIssuesFromRepo: context.fetchIssuesFromRepo
  }))

  const {
    fetchIssuesFromRepo,
    issues: { items }
  } = contextData

  const item = items.find((post) => post.id === Number(postId || 0))

  const relativeDateToNow = item?.createdAt
    ? relativeDateFormatter(item?.createdAt)
    : null

  function handleClickBackToBlog() {
    fetchIssuesFromRepo()
  }

  return (
    <PostContainer>
      {!item && (
        <PostLoadingContent>
          <FontAwesomeIcon icon={faCircleNotch} size="2x" />
        </PostLoadingContent>
      )}

      {item && (
        <>
          <PostHeader>
            <nav>
              <Link to="/" onClick={handleClickBackToBlog}>
                <FontAwesomeIcon icon={faChevronLeft} size="sm" />
                voltar
              </Link>

              <a href={item?.url} target="_blank" rel="noreferrer">
                github
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </nav>

            <strong>{item?.title}</strong>

            <PostTraits>
              <ul>
                <li>
                  <FontAwesomeIcon icon={faGithub} />
                  <span>{item?.userLogin}</span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faCalendarDay} />
                  <span>{relativeDateToNow}</span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faComment} />
                  <span>{item?.comments} comentários</span>
                </li>
              </ul>
            </PostTraits>
          </PostHeader>
          <PostContent>
            {item?.content && <ReactMarkdown>{item.content}</ReactMarkdown>}
          </PostContent>
        </>
      )}
    </PostContainer>
  )
}
