import style from './Radio.module.css'
import type { RadioProps } from './Radio.props'

export const Radio = ({ children, onChange, ...props }: RadioProps) => {
	return (
		<label className={style.radio}>
			<input type="radio" onChange={onChange} {...props} />
			{children}
		</label>
	)
}
