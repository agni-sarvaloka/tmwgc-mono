import styles from '../../styles/bars/stitchbar.module.css';
import Link from 'next/link';
var Stitchbar = function (props) {
    var _a;
    var config = props.config;
    return (<div className={styles.floatbar}>
			{(_a = config === null || config === void 0 ? void 0 : config.navigators) === null || _a === void 0 ? void 0 : _a.map(function (ctrl, key) {
            return (<Link style={{
                    textDecoration: 'none',
                    fontWeight: '300',
                    whiteSpace: 'nowrap',
                }} href={ctrl.src.push} key={key}>
						{ctrl.label.split(' ')[0]}
						<br></br>
						{ctrl.label.split(' ')[1]}
						{" "}
						{ctrl.label.split(' ')[2]}
					</Link>);
        })}
		</div>);
};
export default Stitchbar;
//# sourceMappingURL=stitchbar.jsx.map