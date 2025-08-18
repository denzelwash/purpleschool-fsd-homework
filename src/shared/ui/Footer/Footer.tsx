import styles from './Footer.module.css'

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<span>Политика конфиденциальности</span>
			<span>Правила пользования</span>
			<span>© 2023 Все права защищены</span>
		</footer>
	)
}
