import { createRoot } from 'react-dom/client'
import { Root } from './widgets'
import './shared/assets/styles/global.scss'

createRoot(document.getElementById('root')!).render(<Root />)
