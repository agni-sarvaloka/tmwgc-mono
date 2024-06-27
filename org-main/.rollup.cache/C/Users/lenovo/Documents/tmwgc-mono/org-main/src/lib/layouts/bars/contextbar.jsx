import styles from '../../styles/bars/contextbar.module.css';
import Link from 'next/link';
var Contextbar = function (props) {
    var _a, _b, _c, _d;
    var config = props.config;
    return (<div className={styles.context}>
			<div className={styles.wrap}>
				{(_b = (_a = config === null || config === void 0 ? void 0 : config.ctrls) === null || _a === void 0 ? void 0 : _a.primaries) === null || _b === void 0 ? void 0 : _b.map(function (ctrl, key) {
            return (<Link href={ctrl.url} key={key}>
							{ctrl.label}
						</Link>);
        })}
			</div>
			<div className={styles.wrap}>
				{(_d = (_c = config === null || config === void 0 ? void 0 : config.ctrls) === null || _c === void 0 ? void 0 : _c.secondaries) === null || _d === void 0 ? void 0 : _d.map(function (ctrl, key) {
            return (<Link href={ctrl.url} key={key}>
							{ctrl.label}
						</Link>);
        })}
			</div>
		</div>);
};
export default Contextbar;
//# sourceMappingURL=contextbar.jsx.map