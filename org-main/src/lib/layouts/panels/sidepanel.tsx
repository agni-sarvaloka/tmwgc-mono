import styles from '../../styles/panels/sidepanel.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Sidepanel = (props: any) => {
	const { config, setIsSidepanelOn } = props
	return (
		<div className={styles.sidebar}>
			<div className={styles.title}>
				<h4>Menu</h4>
				<div className={styles.closeicon}>
					<Link onClick={() => setIsSidepanelOn(false)} href={''}>
						close
					</Link>
					<Image
						width={24}
						height={24}
						src={'/icons/close.svg'}
						alt={'secondary'}></Image>
				</div>
			</div>
			<div className={styles.menu}>
				{config?.menu?.map((ctrl: any, key: any) => {
					return (
						<div key={key} className={styles.iconwrapper}>
							<Image
								width={24}
								height={24}
								src={ctrl.icon}
								alt={'secondary'}></Image>
							<Link
								style={{
									textDecoration: 'none',
									fontWeight: '300',
									whiteSpace: 'nowrap',
								}}
								href={ctrl.url}
								key={key}>
								{ctrl.label.split(' ')[0]}
								<br></br>
								{ctrl.label.split(' ')[1]}
								{` `}
								{ctrl.label.split(' ')[2]}
							</Link>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default Sidepanel
