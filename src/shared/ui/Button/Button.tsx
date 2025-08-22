import style from './Button.module.css'
import type { ButtonProps } from './Button.props'

export const Button = ({ children }: ButtonProps) => {
	return <button className={style.button}>{children}</button>
}
