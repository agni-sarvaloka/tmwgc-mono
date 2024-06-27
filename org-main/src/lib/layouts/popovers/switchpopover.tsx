import styles from './popover.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Switchpopover = (props: any) => {
	const { setIsPopoverOn } = props
	return (
		<div className={styles.popover}>
			<div className={styles.title}>
				<h4>Switch between our subsidiaries</h4>
				<div className={styles.closeicon}>
					<Link
						onClick={() => {
							setIsPopoverOn(false)
						}}
						href={''}>
						close
					</Link>
					<Image
						width={24}
						height={24}
						src={'/icons/close.svg'}
						alt={'secondary'}></Image>
				</div>
			</div>
		</div>
	)
}

export default Switchpopover
