import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import FincogniaLandingPage from './FincogniaLandingPage.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <FincogniaLandingPage />
    </StrictMode>,
)
