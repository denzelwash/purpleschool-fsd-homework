import style from './Message.module.css'
import type { MessageProps } from './Message.props'

export const Message = ({ text }: MessageProps) => {
	return <div className={style.message}>{text}</div>
}
