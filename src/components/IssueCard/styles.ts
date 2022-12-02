import styled from 'styled-components'

export const IssueCardContainer = styled.article`
  display: flex;
  flex-direction: column;
  position: relative;

  max-height: 260px;
  overflow: hidden;
  background-color: ${({ theme }) => theme['base-post']};
  border-radius: 10px;
  padding: 2rem;

  &:hover {
    box-shadow: 0 0 0 2px ${({ theme }) => theme['base-label']};
  }

  header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1rem;

    h2 {
      font-size: 1.25rem;
      color: ${({ theme }) => theme['base-title']};
    }

    span {
      margin-top: 0.3125rem;
      font-size: 0.875rem;
      color: ${({ theme }) => theme['base-span']};
      white-space: nowrap;
    }
  }

  p {
    flex: 1;
    margin-top: 1rem;
    overflow: hidden;
    word-wrap: break-word;
    word-break: break-all;

    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`
