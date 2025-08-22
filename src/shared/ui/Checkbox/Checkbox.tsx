import style from './Checkbox.module.css'
import type { CheckboxProps } from './Checkbox.props'

export const Checkbox = ({ children, checked, onChange, ...props }: CheckboxProps) => {
	return (
		<label className={style.checkbox}>
			<input type="checkbox" checked={checked} onChange={onChange} {...props} />
			{children}
		</label>
	)
}
