import styles from '../../styles/bars/contextbar.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Contextbar = (props: any) => {
	const { config } = props

	return (
		<div className={styles.context}>
			<div className={styles.wrap}>
				{config?.ctrls?.primaries?.map((ctrl: any, key: any) => {
					return (
						<div key={key} className={styles.iconwrapper}>
							<Image
								width={18}
								height={18}
								src={ctrl.icon}
								alt={'icon'}></Image>
							<Link href={ctrl.url} key={key}>
								{ctrl.label}
							</Link>
						</div>
					)
				})}
			</div>
			<div className={styles.secondwrap}>
				{config?.ctrls?.secondaries?.map((ctrl: any, key: any) => {
					return (
						<div key={key} className={styles.iconwrapper}>
							<Image
								width={18}
								height={18}
								src={ctrl.icon}
								alt={'icon'}></Image>
							<Link href={ctrl.url} key={key}>
								{ctrl.label}
							</Link>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default Contextbar
