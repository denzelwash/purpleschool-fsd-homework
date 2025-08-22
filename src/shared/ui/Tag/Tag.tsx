import style from './Tag.module.css'
import type { TagProps } from './Tag.props'

export const Tag = ({ children }: TagProps) => {
	return <div className={style.tag}>{children}</div>
}
