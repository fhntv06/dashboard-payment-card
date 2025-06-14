import type { ComponentType } from 'react'

import { Dashboard, Statistic, History, Role } from '../../pages'

interface Route {
  path: string;
  Component: ComponentType;
  title?: string;
  icon?: string;
}

export const pathsRoutes: {
  dashboard: string
  statistic: string
  history: string
  role: string
  card: string
  auth: string
} = {
  dashboard: `${import.meta.env.VITE_PUBLIC_PATH_FOR_GITHUB_PAGES}/dashboard`,
  statistic: `${import.meta.env.VITE_PUBLIC_PATH_FOR_GITHUB_PAGES}/statistic`,
  history: `${import.meta.env.VITE_PUBLIC_PATH_FOR_GITHUB_PAGES}/history`,
  role: `${import.meta.env.VITE_PUBLIC_PATH_FOR_GITHUB_PAGES}/role`,
  card: `${import.meta.env.VITE_PUBLIC_PATH_FOR_GITHUB_PAGES}/card`,
  auth: `${import.meta.env.VITE_PUBLIC_PATH_FOR_GITHUB_PAGES}/auth`,
}

export const routes: Route[] = [
  { path: pathsRoutes.dashboard, Component: Dashboard, title: 'Главная', icon: 'home' },
  { path: pathsRoutes.statistic, Component: Statistic, title: 'Статистика', icon: 'person' },
  { path: pathsRoutes.history, Component: History, title: 'История действий', icon: 'person' },
  { path: pathsRoutes.role, Component: Role, title: 'Ролевая модель', icon: 'person' },
]
