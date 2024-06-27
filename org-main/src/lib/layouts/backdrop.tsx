import styles from './backdrop.module.css'

const Backdrop = (props: any) => {
	const { isBackdropOn, setIsBackdropOn } = props
	return (
		<div
			onClick={() => {
				setIsBackdropOn(!isBackdropOn)
			}}
			className={styles.backdrop}>
			{props.children}
		</div>
	)
}

export default Backdrop
