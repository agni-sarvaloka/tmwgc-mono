import styles from '../../styles/bars/tailbar.module.css'
import Link from 'next/link'

const Tailbar = (props: { config: any }) => {
	const { config } = props

	return (
		<div className={styles.tail}>
			{config?.ctrls?.crucials?.map((ctrl: any, key: any) => {
				return (
					<Link href={ctrl.url} key={key}>
						{ctrl.label}
					</Link>
				)
			})}
		</div>
	)
}

export default Tailbar
