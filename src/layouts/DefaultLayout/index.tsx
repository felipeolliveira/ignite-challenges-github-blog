import { Header } from '@/components'
import { Outlet } from 'react-router-dom'
import { RoutesContainer } from './styles'

export function DefaultLayout() {
  return (
    <div>
      <Header />

      <RoutesContainer>
        <Outlet />
      </RoutesContainer>
    </div>
  )
}
