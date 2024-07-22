import styles from '../../styles/bars/tailbar.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Tailbar = (props: { config: any }) => {
	const { config } = props

	const brand = (
		<div className={styles.brand}>
			<Image
				style={{ cursor: 'pointer' }}
				width={180}
				height={42}
				src={'https://svgshare.com/i/17P8.svg'}
				alt={'tmwgc_brand'}></Image>
		</div>
	)

	const links = (
		<div className={styles.block}>
			{brand}
			<div className={styles.links}>
				<h4>Solutions.</h4>
				<p>
					Metatrace <br /> Ledger
				</p>
				<p>
					Metaweb <br /> Browser
				</p>
				<p>
					Metanet <br /> Chain
				</p>
				<p>
					Metaproto <br /> Compiler
				</p>
				<p>
					Reality Engine <br /> SDK
				</p>
				<p>
					Prism RE <br /> Architect Kit
				</p>
				<p>
					Matrix <br /> Realtime OS
				</p>
				<p></p>
			</div>
			<div className={styles.links}>
				<h4>Divisions.</h4>
				<p>
					XRW3 <br /> Innovation Lab
				</p>
				<p>
					Institute of <br /> Digital Currencies <br /> Research & Studies
				</p>
				<p>
					TMWGC <br /> Consulting Services
				</p>
				<p>
					Digital Money <br /> Express
				</p>
			</div>
			<div className={styles.links}>
				<h4>Governance.</h4>
				<p>Metagov Chamber</p>
				<p>Roadmap</p>
				<p>Reports</p>
				<p>Conferences</p>
			</div>
			<div className={styles.links}>
				<h4>Resources.</h4>
				<p>Research Papers</p>
				<p>Calendar</p>
			</div>
			<div className={styles.links}>
				<h4>Community.</h4>
				<p>Instagram</p>
				<p>Discord</p>
				<p>Telegram</p>
				<p>Twitter</p>
				<p>Linkedin</p>
			</div>
			<div className={styles.links}>
				<h4>Opportunities.</h4>
				<p>Career with us</p>
				<p>Partnerships</p>
				<p>Ecosystem Alliances</p>
			</div>
		</div>
	)

	return (
		<div className={styles.tailbar}>
			{links}
			<div className={styles.note}>
				{config?.ctrls?.crucials?.map((ctrl: any, key: any) => {
					return (
						<Link href={ctrl.url} key={key}>
							{ctrl.label}
						</Link>
					)
				})}
			</div>
		</div>
	)
}

export default Tailbar
