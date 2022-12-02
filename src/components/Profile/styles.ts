import styled from 'styled-components'

export const ProfileLoadingUser = styled.div`
  position: absolute;
  inset: 0;
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

export const ProfileSectionContainer = styled.section`
  display: flex;
  align-items: center;
  gap: 2rem;

  position: relative;

  padding: 2rem 2.5rem;
  background-color: ${({ theme }) => theme['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  img {
    width: 9.25rem;
    height: 9.25rem;
    flex-shrink: 0;
    border-radius: 8px;
    object-fit: cover;
  }

  @media (max-width: 680px) {
    flex-direction: column;
  }
`

export const ProfileDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;

  header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 0.5rem;

    padding-top: 0.5rem;

    h1 {
      font-weight: 700;
      font-size: 1.5rem;
      line-height: 1.3;
      color: ${({ theme }) => theme['base-title']};
    }

    a {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      border-radius: 6px;
      border-top: 1px solid transparent;
      border-bottom: 1px solid transparent;

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

  p {
    margin-top: 0.5rem;
    flex: 1;
  }
`

export const ProfileTraits = styled.footer`
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
