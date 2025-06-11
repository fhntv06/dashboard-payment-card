import type { ComponentType } from 'react'

import { Main, Statistic, History, Role } from '../../pages'

interface Route {
  path: string;
  Component: ComponentType;
  title?: string;
  icon?: string;
}

export const pathsRoutes: {
  main: string
  statistic: string
  history: string
  role: string
} = {
  main: `${import.meta.env.VITE_PUBLIC_PATH_FOR_GITHUB_PAGES}/dashboard`,
  statistic: `${import.meta.env.VITE_PUBLIC_PATH_FOR_GITHUB_PAGES}/statistic`,
  history: `${import.meta.env.VITE_PUBLIC_PATH_FOR_GITHUB_PAGES}/history`,
  role: `${import.meta.env.VITE_PUBLIC_PATH_FOR_GITHUB_PAGES}/role`,
}

export const routes: Route[] = [
  { path: pathsRoutes.main, Component: Main, title: 'Главная', icon: 'home' },
  { path: pathsRoutes.statistic, Component: Statistic, title: 'Статистика', icon: 'person' },
  { path: pathsRoutes.history, Component: History, title: 'История действий', icon: 'person' },
  { path: pathsRoutes.role, Component: Role, title: 'Ролевая модель', icon: 'person' },
]
