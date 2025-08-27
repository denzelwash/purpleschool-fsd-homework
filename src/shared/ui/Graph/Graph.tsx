import styles from './Graph.module.css'
import type { GraphProps } from './Graph.props'

export const Graph = ({ title, children }: GraphProps) => {
	return (
		<div className={styles.graph}>
			{title && <h2 className={styles.title}>{title}</h2>}
			<div>{children}</div>
		</div>
	)
}
