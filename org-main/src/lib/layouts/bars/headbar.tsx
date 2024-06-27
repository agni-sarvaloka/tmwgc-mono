import styles from '../../styles/bars/headbar.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Headbar = (props: any) => {
	const {
		config,
		setIsSidepanelOn,
		isOverpanelOn,
		setIsOverpanelOn,
		activeMenu,
		setIsActiveMenu,
		isPopoverOn,
		setIsPopoverOn,
		isDropoverOn,
		setIsDropoverOn,
	} = props

	const menu = (
		<div className={styles.menu}>
			{config?.menu?.map((ctrl: any, key: any) => {
				return (
					<div key={key} className={styles.iconwrapper}>
						<Link
							style={{
								textDecoration: 'none',
								fontWeight: '500',
							}}
							key={key}
							onClick={() => {
								setIsOverpanelOn(!isOverpanelOn)
								setIsActiveMenu(ctrl.label)
							}}
							href={ctrl.src.push}>
							{ctrl.label}
						</Link>
						<Image
							width={16}
							height={16}
							src={
								isOverpanelOn && activeMenu === ctrl.label
									? '/icons/arrow-up.svg'
									: '/icons/down.svg'
							}
							alt={'secondary'}></Image>
					</div>
				)
			})}
		</div>
	)

	const access = (
		<div className={styles.access}>
			<Image
				width={24}
				height={24}
				src={'/icons/access.svg'}
				alt={'access'}></Image>
			<Link style={{ textDecoration: 'none' }} href={config?.port?.src.push}>
				{config?.port?.label}
			</Link>
		</div>
	)

	const brand = (
		<Image
			style={{ cursor: 'pointer' }}
			width={180}
			height={42}
			src={'https://svgshare.com/i/17P8.svg'}
			alt={'tmwgc_brand'}></Image>
	)

	const burger = (
		<Image
			onClick={() => setIsSidepanelOn(true)}
			style={{ cursor: 'pointer' }}
			className={styles.burger}
			width={24}
			height={24}
			src={'/icons/burger.svg'}
			alt={'burger'}></Image>
	)

	const shift = (
		<div onClick={() => setIsPopoverOn(!isPopoverOn)} className={styles.shift}>
			<Image
				width={18}
				height={18}
				src={'/icons/signal.svg'}
				alt={'domain'}></Image>
			<p style={{ fontSize: '10px' }}>Domains</p>
		</div>
	)

	const swap = (
		<div
			onClick={() => setIsDropoverOn(!isDropoverOn)}
			className={styles.action}>
			<Image
				width={32}
				height={32}
				src={'/icons/domain.svg'}
				alt={'domain'}></Image>
			<p style={{ fontSize: '11px' }}>
				Explore <br />
				Apps
			</p>
		</div>
	)

	const action = (
		<div className={styles.iconwrapper}>
			<button style={{ cursor: 'pointer' }}>
				Become a partner
				<Image
					width={16}
					height={16}
					src={'/icons/open-lite.svg'}
					alt={'icon'}></Image>
			</button>
		</div>
	)

	return (
		<div className={styles.head}>
			{burger}
			{brand}
			{shift}
			{menu}
			{swap}
			{action}
			{access}
		</div>
	)
}

export default Headbar
