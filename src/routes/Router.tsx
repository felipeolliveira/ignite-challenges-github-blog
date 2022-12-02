import { DefaultLayout } from '@/layouts'
import { BlogPage, PostPage } from '@/pages'
import { Route, Routes } from 'react-router-dom'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<BlogPage />} />
        <Route path="/post/:postId" element={<PostPage />} />
      </Route>
    </Routes>
  )
}
