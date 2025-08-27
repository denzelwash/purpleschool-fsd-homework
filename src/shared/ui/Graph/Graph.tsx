import style from './Graph.module.css'
import type { GraphProps } from './Graph.props'

export const Graph = ({ title, children }: GraphProps) => {
	return (
		<div className={style.graph}>
			{title && <h2 className={style.title}>{title}</h2>}
			<div>{children}</div>
		</div>
	)
}
