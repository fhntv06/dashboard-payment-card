import { type FC, useEffect, useState } from 'react'
import {
  Navigate,
  Route,
  BrowserRouter,
  Routes,
} from 'react-router-dom'

import { setUserData } from '../../app/store/slices'
import { pathsRoutes, routes } from '../../app/routes'
import { useDispatch } from '../../hooks'
import { LoaderSpinner } from '../../shared'
import { getUserData } from '../../app/api'
import { Card } from '../../pages'

export const App: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const dispatch = useDispatch()

  useEffect(() => {
    getUserData(1)
      .then(({ data }) => {
        dispatch(setUserData({ ...data }))

        setIsLoading(false)
      })
      .catch((err) => {
        new Error('Ошибка в запросе: ' + err)
      })
  }, [])

  return (
    isLoading
      ? <LoaderSpinner />
      : (
        <BrowserRouter>
          <Routes>
            {routes.map((route) => <Route key={route.path} {...route} />)}
            <Route path={`${import.meta.env.VITE_PUBLIC_PATH_FOR_GITHUB_PAGES}/dashboard/card/:id`} Component={Card} />
            <Route path='*' element={<Navigate to={`${import.meta.env.VITE_PUBLIC_PATH_FOR_GITHUB_PAGES}/dashboard`}/>}/>
          </Routes>
        </BrowserRouter>
      )
  )
}
