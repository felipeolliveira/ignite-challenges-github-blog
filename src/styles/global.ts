import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :focus-visible {
    outline: 0;
    box-shadow: 0 0 0 1px ${({ theme }) => theme['blue-500']} !important;
  }

  body {
    background-color: ${({ theme }) => theme['base-background']};
    color: ${({ theme }) => theme['base-text']};
    -webkit-font-smoothing: antialiased;
  }
  
  body, input, textarea, a, button {
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.6;
  }

  button, a {
    cursor: pointer;
    
    &:disabled {
      cursor: not-allowed;
    }
  }

  strong {
    font-weight: 700;
  }

  /* ===== Scrollbar CSS ===== */
  /* Firefox */
  * {
    scrollbar-width: auto;
    scrollbar-color: #8f54a0 #b60c0c;
  }

  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 12px;
  }

  *::-webkit-scrollbar-track {
    background: ${({ theme }) => theme['base-input']};
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme['base-border']};;
    border-radius: 10px;
    border: 3px solid ${({ theme }) => theme['base-input']};;
  }
`
