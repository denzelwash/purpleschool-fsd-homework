import style from './Info.module.css'
import { Avatar, useUserStore } from '@/entities/user'
import { InfoBox } from '@/shared/ui'

export const Info = () => {
	const { user } = useUserStore()

	return (
		<div className={style.info}>
			<h2>Инфа о юзере</h2>
			<div>
				{user?.avatar && <Avatar image={user.avatar} />}
				<h3>{user?.name}</h3>
			</div>
			<div>{Array.isArray(user?.info) && user?.info.map((info) => <InfoBox text={info.text} desc={info.desc} icon="Star" />)}</div>
		</div>
	)
}
