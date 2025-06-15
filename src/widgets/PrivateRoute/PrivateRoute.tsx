import { useEffect } from 'react'
import { Outlet,useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks'
import { pathsRoutes } from '../../app/routes'

export const PrivateRoute = () => {
  const isAuth = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuth) {
      navigate(`${pathsRoutes.auth}`)
    }
  }, [])

  return <Outlet />
}
