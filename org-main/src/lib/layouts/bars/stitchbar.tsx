import styles from '../../styles/bars/stitchbar.module.css'

import Link from 'next/link'
import Image from 'next/image'

const Stitchbar = (props: { config: any }) => {
	const { config } = props

	return (
		<div className={styles.floatbar}>
			{config?.navigators?.map((ctrl: any, key: any) => {
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
	)
}

export default Stitchbar
