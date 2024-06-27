import styles from '../../styles/bars/shoutbar.module.css';
import Link from 'next/link';
var Shoutbar = function (props) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    var setIsShoutBarOn = props.setIsShoutBarOn, config = props.config;
    return (<div className={styles.bar}>
			<p>{config === null || config === void 0 ? void 0 : config.announcement}</p>
			<Link href={(_b = (_a = config === null || config === void 0 ? void 0 : config.ctrls) === null || _a === void 0 ? void 0 : _a.primary) === null || _b === void 0 ? void 0 : _b.url}>
				{(_d = (_c = config === null || config === void 0 ? void 0 : config.ctrls) === null || _c === void 0 ? void 0 : _c.primary) === null || _d === void 0 ? void 0 : _d.label}
			</Link>
			<Link href={(_f = (_e = config === null || config === void 0 ? void 0 : config.ctrls) === null || _e === void 0 ? void 0 : _e.primary) === null || _f === void 0 ? void 0 : _f.url}>
				{(_h = (_g = config === null || config === void 0 ? void 0 : config.ctrls) === null || _g === void 0 ? void 0 : _g.secondary) === null || _h === void 0 ? void 0 : _h.label}
			</Link>
			<Link onClick={function () { return setIsShoutBarOn(false); }} href={''}>
				close X
			</Link>
		</div>);
};
export default Shoutbar;
//# sourceMappingURL=shoutbar.jsx.map