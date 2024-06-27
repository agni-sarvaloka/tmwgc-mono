import styles from '../../styles/bars/tailbar.module.css';
import Link from 'next/link';
var Tailbar = function (props) {
    var _a, _b;
    var config = props.config;
    return (<div className={styles.tail}>
			{(_b = (_a = config === null || config === void 0 ? void 0 : config.ctrls) === null || _a === void 0 ? void 0 : _a.crucials) === null || _b === void 0 ? void 0 : _b.map(function (ctrl, key) {
            return (<Link href={ctrl.url} key={key}>
						{ctrl.label}
					</Link>);
        })}
		</div>);
};
export default Tailbar;
//# sourceMappingURL=tailbar.jsx.map