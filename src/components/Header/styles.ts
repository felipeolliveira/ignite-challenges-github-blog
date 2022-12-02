import styled from 'styled-components'

import cover from '@/assets/cover.jpg'

export const HeaderContainer = styled.header`
  height: 18.5rem;

  display: flex;
  justify-content: center;

  background-image: url(${cover});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;

  img {
    margin-top: 4rem;
    height: 4.25rem;
  }
`
