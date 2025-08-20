import style from './Input.module.css'
import type { InputProps } from './Input.props'

export const Input = ({ name, label, value, onChange, ...props }: InputProps) => {
	return (
		<div className={style.input}>
			{label && <label htmlFor={name}>{label}</label>}
			<input id={name} type="text" value={value} onChange={onChange} {...props} />
		</div>
	)
}
