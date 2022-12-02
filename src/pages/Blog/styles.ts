import styled from 'styled-components'

export const BlogContainer = styled.div`
  margin-top: -5.5rem;
`

export const IssuesList = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 3rem;

  & > a {
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
