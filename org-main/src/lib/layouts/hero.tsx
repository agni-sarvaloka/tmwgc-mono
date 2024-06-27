import styles from '../styles/heroes/hero.module.css'

const Hero = () => {
	return (
		<div className={styles.hero}>
			<div className={styles.wrapper}>
				<h1>
					Building an autonomous, transparent and truly decentralized future for
					the world.
				</h1>
				<h4>
					We are an open-source community foundation pioneering in the space of
					distributed spatial computing with a vision to advance the
					foundational infrastructures, ecosystems and mainstream market for
					spatial computing
				</h4>
			</div>
		</div>
	)
}

export default Hero
