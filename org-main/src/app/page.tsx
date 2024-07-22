'use client'

import Backdrop from '@/lib/layouts/backdrop'
import settings from '../config/settings.json'

import styles from './page.module.css'

import Switchpopover from '@/lib/layouts/popovers/switchpopover'
import Droppopover from '@/lib/layouts/popovers/droppopver'

import {
	Headbar,
	Tailbar,
	Stitchbar,
	Shoutbar,
	Contextbar,
} from '@/lib/layouts/bars'

import Hero from '@/lib/layouts/hero'

import { useState } from 'react'
import { Sidepanel, Overpanel } from '../lib/layouts/panels'

const Home = () => {

	const [isShoutBarOn, setIsShoutBarOn] = useState(true)
	const [isSidepanelOn, setIsSidepanelOn] = useState(false)
	const [isOverpanelOn, setIsOverpanelOn] = useState(false)
	const [isPopoverOn, setIsPopoverOn] = useState(false)
	const [isDropoverOn, setIsDropoverOn] = useState(false)
	const [activeMenu, setIsActiveMenu] = useState(false)
	const [isBackdropOn, setIsBackdropOn] = useState(false)

	const headbarfuncs = {
		isDropoverOn,
		setIsDropoverOn,
		isPopoverOn,
		setIsPopoverOn,
		activeMenu,
		setIsActiveMenu,
		isOverpanelOn,
		setIsOverpanelOn,
		setIsSidepanelOn,
	}

	return (
		<main className={styles.main}>
			{isOverpanelOn && <Overpanel />} 
			{(isSidepanelOn || isPopoverOn) && (
				<Backdrop
					isBackdropOn={isBackdropOn}
					setIsBackdropOn={setIsBackdropOn}
				/>
			)}
			{isPopoverOn && <Switchpopover setIsPopoverOn={setIsPopoverOn} />}
			{isDropoverOn && <Droppopover setIsDropoverOn={setIsDropoverOn} />}
			{isSidepanelOn && (
				<Sidepanel
					config={settings.sidepanel}
					setIsSidepanelOn={setIsSidepanelOn}
				/>
			)}
			{isShoutBarOn && (
				<Shoutbar
					config={settings.shoutbar}
					setIsShoutBarOn={setIsShoutBarOn}
				/>
			)}
			<Contextbar config={settings.contextbar} />
			<Headbar {...headbarfuncs} config={settings.headbar} />
			<Stitchbar config={settings.stitchbar} />
			<Hero />
			<Tailbar config={settings.tailbar} />
		</main>
	)
}

export default Home
