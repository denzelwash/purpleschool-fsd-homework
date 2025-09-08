import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import { router } from '../routes/routes'
import { AuthProvider } from '../providers/AuthProvider'
import '../styles/variables.css'
import '../styles/base.css'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<AuthProvider>
			<RouterProvider router={router} />
		</AuthProvider>
	</StrictMode>
)
