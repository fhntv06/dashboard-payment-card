import { type FC, useEffect, useState } from 'react'
import {
  Navigate,
  Route,
  BrowserRouter,
  Routes,
} from 'react-router-dom'

import { routes } from '../../app/routes'
import { setField } from '../../app/store/slices'
import { useDispatch, useSelector, } from '../../hooks'
import { LoaderSpinner } from '../../shared'

export const App: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const dispatch = useDispatch()
  const { field } = useSelector((state) => state.example)

  // TODO: переписать на промисы
  useEffect(() => {
    setIsLoading(false)

    dispatch(setField({ field: 'field' }))
  }, [])

  useEffect(() => {
    if (field) {
      console.log('useSelector field:', field)
    }
  }, [field])

  return (
    isLoading
      ? <LoaderSpinner />
      : (
        <BrowserRouter>
          <Routes>
            {routes.map((route) => <Route key={route.path} {...route} />)}
            <Route path='*' element={<Navigate to='/'/>}/>
          </Routes>
        </BrowserRouter>
      )
  )
}
