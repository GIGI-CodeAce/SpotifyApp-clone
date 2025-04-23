import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import LoadingPlaceholder from './loadingPlaceholder.tsx'

createRoot(document.getElementById('root')!).render(
    <App />
    // <LoadingPlaceholder/>
)
