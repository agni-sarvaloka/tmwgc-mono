import styles from './dropover.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Droppopover = (props: any) => {
	const { setIsDropoverOn } = props

	return (
		<div className={styles.popover}>
			<p>switch apps</p>
		</div>
	)
}

export default Droppopover
