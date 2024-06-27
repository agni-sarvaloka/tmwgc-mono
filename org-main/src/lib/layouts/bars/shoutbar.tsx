import styles from '../../styles/bars/shoutbar.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Shoutbar = (props: { setIsShoutBarOn: any; config: any }) => {
	const { setIsShoutBarOn, config } = props

	return (
		<div className={styles.bar}>
			<div
				style={{
					display: 'grid',
					gridAutoFlow: 'column',
					alignItems: 'center',
					gridGap: '12px',
				}}>
				<Image
					width={24}
					height={24}
					src={'/icons/shout.svg'}
					alt={'secondary'}></Image>
				<p>{config?.announcement}</p>
			</div>
			<div
				style={{
					display: 'grid',
					gridAutoFlow: 'column',
					alignItems: 'center',
					gridGap: '32px',
				}}>
				<div className={styles.iconwrapper}>
					<Link href={config?.ctrls?.primary?.url}>
						{config?.ctrls?.primary?.label}
					</Link>
					<Image
						width={18}
						height={18}
						src={config?.ctrls?.primary?.icon}
						alt={'primary'}></Image>
				</div>
				<div className={styles.iconwrapper}>
					<Link href={config?.ctrls?.primary?.url}>
						{config?.ctrls?.secondary?.label}
					</Link>
					<Image
						width={18}
						height={18}
						src={config?.ctrls?.secondary?.icon}
						alt={'secondary'}></Image>
				</div>
				<div className={styles.closeicon}>
					<Link onClick={() => setIsShoutBarOn(false)} href={''}>
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

export default Shoutbar
