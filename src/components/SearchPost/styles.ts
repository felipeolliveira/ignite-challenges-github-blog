import styled from 'styled-components'

export const SearchLoadingContainer = styled.div`
  position: absolute;

  inset: -10px;
  background-color: ${({ theme }) => theme['base-profile']};
  border-radius: 10px;
  opacity: 0.9;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

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

export const SearchPostContainer = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;

  margin-top: 4.5rem;

  form {
    width: 100%;
    margin-top: 0.75rem;

    display: flex;
    align-items: center;
    gap: 0.5rem;

    input {
      width: 100%;
      padding: 0.75rem 1rem;
      border-radius: 6px;
      box-shadow: 0 0 0 1px ${({ theme }) => theme['base-border']};

      &::placeholder {
        color: ${({ theme }) => theme['base-label']};
      }
    }

    button {
      flex: 1;

      display: flex;
      justify-content: center;
      align-items: center;
      align-self: stretch;
      gap: 0.5rem;

      padding: 0 1rem;
      border-radius: 6px;
      background-color: transparent;

      white-space: nowrap;
      line-height: 1;

      svg {
        line-height: 0;
      }

      &:hover {
        background-color: ${({ theme }) => theme['base-post']};
      }
    }
  }
`

export const PostSummary = styled.div`
  display: flex;
  justify-content: space-between;

  align-items: center;

  strong {
    font-weight: 700;
    font-size: 1.125rem;

    color: ${({ theme }) => theme['base-subtitle']};
  }

  span {
    font-size: 0.875rem;

    color: ${({ theme }) => theme['base-span']};
  }
`
