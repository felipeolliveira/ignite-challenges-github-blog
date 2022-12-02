import styled from 'styled-components'

export const PostContainer = styled.main`
  margin-top: -5.5rem;
`

export const PostLoadingContent = styled.div`
  height: 11.125rem;

  background-color: ${({ theme }) => theme['base-profile']};
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    @keyframes rotate {
      from {
        transform: rotate(0);
      }
      to {
        transform: rotate(360deg);
      }
    }

    animation: rotate 0.8s ease-in-out infinite;
    color: ${({ theme }) => theme['base-text']};
  }
`

export const PostHeader = styled.header`
  background-color: ${({ theme }) => theme['base-profile']};
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      border-radius: 6px;
      border-top: 1px solid transparent;
      border-bottom: 1px solid transparent;
      padding: 0.25rem 0;

      font-weight: 700;
      font-size: 0.75rem;
      line-height: 0;
      text-transform: uppercase;
      color: ${({ theme }) => theme['blue-500']};

      &:hover {
        border-radius: 0;
        border-bottom-color: ${({ theme }) => theme['blue-500']};
      }
    }
  }

  & > strong {
    display: block;
    margin-top: 1.25rem;

    font-weight: 700;
    font-size: 1.5rem;
    line-height: 1.3;
    color: ${({ theme }) => theme['base-title']};
  }
`

export const PostTraits = styled.footer`
  padding-top: 1rem;

  ul {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    flex-wrap: wrap;

    li {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      svg {
        color: ${({ theme }) => theme['base-label']};
      }

      span {
        line-height: 1.6;
        color: ${({ theme }) => theme['base-subtitle']};
      }
    }
  }
`

export const PostContent = styled.section`
  padding: 2rem;

  a {
    color: #4183c4;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  p,
  blockquote,
  ul,
  ol,
  dl,
  table,
  pre {
    margin: 15px 0;
  }

  ul,
  ol {
    padding-left: 30px;
  }

  ul {
    list-style: disc;
  }
  ol {
    list-style: decimal;
  }

  h1 {
    border-bottom: 1px solid ${({ theme }) => theme['base-label']};
    color: ${({ theme }) => theme['base-title']};
    font-size: 2em;
  }

  h2 {
    border-bottom: 1px solid ${({ theme }) => theme['base-label']};
    color: ${({ theme }) => theme['base-title']};
    font-size: 1.5em;
  }

  h3 {
    font-size: 1em;
  }

  h4 {
    font-size: 0.8em;
  }

  h5 {
    font-size: 0.8em;
  }

  h6 {
    color: ${({ theme }) => theme['base-subtitle']};
    font-size: 0.8em;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: bold;
    line-height: 1.7;
    margin: 1em 0 15px 0;
  }

  h1 + p,
  h2 + p,
  h3 + p {
    margin-top: 10px;
  }

  img {
    max-width: 100%;
  }

  code,
  pre {
    background-color: ${({ theme }) => theme['base-border']};
    border-radius: 0.125rem;
    font-family: Consolas, 'Liberation Mono', Courier, monospace;
    font-size: 0.8rem;
    margin: 0 0.125rem;
    padding: 0 0.3125rem;
  }

  pre code {
    border: none;
    margin: 0;
    padding: 0;
    white-space: pre;
    background-color: transparent;
  }

  pre {
    background-color: ${({ theme }) => theme['base-post']};
    padding: 1rem;
  }
`
