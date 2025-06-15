import { useSelector } from 'react-redux'
export function useAuth() {
  const { login } = useSelector((state: any) => state.userData)

  return Boolean(login)
}