import { relativeDateFormatter } from '@/utils'
import { IssueCardContainer } from './styles'

interface IssueCardProps {
  title: string
  createdAt: Date
  content: string
}

export default function IssueCard({
  title,
  content,
  createdAt
}: IssueCardProps) {
  const dateRelativeToNow = relativeDateFormatter(createdAt)

  return (
    <IssueCardContainer>
      <header>
        <h2>{title}</h2>
        <span>{dateRelativeToNow}</span>
      </header>

      <p>{content}</p>
    </IssueCardContainer>
  )
}
