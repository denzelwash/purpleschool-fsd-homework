import style from './Button.module.css'
import type { ButtonProps } from './Button.props'

export const Button = ({ children, onClick }: ButtonProps) => {
	return (
		<button className={style.button} onClick={onClick}>
			{children}
		</button>
	)
}
