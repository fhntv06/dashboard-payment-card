import { type FC } from 'react'
import {
  Navigate,
  Route,
  BrowserRouter,
  Routes,
} from 'react-router-dom'
import { privateRoutes, pathsRoutes } from '../../app/routes'
import { PrivateRoute } from '../../widgets'

export const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`${import.meta.env.VITE_PUBLIC_PATH_FOR_GITHUB_PAGES}`} element={<PrivateRoute />}>
          {privateRoutes.map((route) => <Route key={route.path} {...route} />)}
        </Route>
        <Route path='*' element={<Navigate to={`${pathsRoutes.dashboard}`}/>}/>
      </Routes>
    </BrowserRouter>
  )
}
