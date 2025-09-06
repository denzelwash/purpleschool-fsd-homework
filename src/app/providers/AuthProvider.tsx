import { useEffect, type ReactNode } from 'react'
import { useUserStore } from '@/entities/user'

export const AuthProvider = ({ children }: { children: ReactNode }) => {
	const { loadUser, isLoadingUser, errorUser } = useUserStore()

	useEffect(() => {
		loadUser()
	}, [loadUser])

	if (isLoadingUser) {
		return <div>Загрузка юзера....</div>
	}

	if (errorUser) {
		return <div>Произошла ошибка при получении юзера, досвидос</div>
	}

	return <>{children}</>
}
