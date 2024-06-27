import styles from '../../styles/panels/overpanel.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Overpanel = (props: any) => {
	const { config } = props
	return (
		<div className={styles.overpanel}>
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

export default Overpanel
