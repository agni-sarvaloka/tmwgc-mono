'use client';
import settings from '../config/settings.json';
import styles from './page.module.css';
import { Headbar, Tailbar, Stitchbar, Shoutbar, Contextbar, } from '@/lib/layouts/bars';
import Hero from '@/lib/layouts/hero';
import { useState } from 'react';
var Home = function () {
    var _a = useState(true), isShoutBarOn = _a[0], setIsShoutBarOn = _a[1];
    var features = (<div className={styles.features}>
			<h1>We are the community</h1>
		</div>);
    return (<main className={styles.main}>
			{isShoutBarOn && (<Shoutbar config={settings.shoutbar} setIsShoutBarOn={setIsShoutBarOn}/>)}
			<Contextbar config={settings.contextbar}/>
			<Headbar config={settings.headbar}/>
			<Stitchbar config={settings.stitchbar}/>
			<Hero />
			{features}
			<Tailbar config={settings.tailbar}/>
		</main>);
};
export default Home;
//# sourceMappingURL=page.jsx.map