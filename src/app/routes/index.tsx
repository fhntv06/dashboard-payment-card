import type { ComponentType, JSX } from 'react'

import { Main, UI } from '../../pages'

interface Route {
  path: string;
  Component: ComponentType;
  title?: string;
  icon?: JSX.Element;
}

export const pathsRoutes: {
  main: string
  ui: string
} = {
  main: `${import.meta.env.VITE_PUBLIC_PATH_FOR_GITHUB_PAGES}/`,
  ui: `${import.meta.env.VITE_PUBLIC_PATH_FOR_GITHUB_PAGES}/ui`,
}

export const routes: Route[] = [
  { path: pathsRoutes.main, Component: Main, title: 'Dashboard payment cards' },
  { path: pathsRoutes.ui, Component: UI, title: 'Dashboard payment cards' },
]
