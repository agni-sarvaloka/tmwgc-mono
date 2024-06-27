import styles from '../../styles/bars/headbar.module.css';
import Link from 'next/link';
import Image from 'next/image';
var Headbar = function (props) {
    var _a, _b, _c;
    var config = props.config;
    var menu = (<div className={styles.menu}>
			{(_a = config === null || config === void 0 ? void 0 : config.menu) === null || _a === void 0 ? void 0 : _a.map(function (ctrl, key) {
            return (<Link style={{
                    textDecoration: 'none',
                    fontWeight: '500',
                }} key={key} href={ctrl.src.push}>
						{ctrl.label}
					</Link>);
        })}
		</div>);
    var access = (<div className={styles.access}>
			<Image width={24} height={24} src={'/icons/access.svg'} alt={'access'}></Image>
			<Link style={{ textDecoration: 'none' }} href={(_b = config === null || config === void 0 ? void 0 : config.port) === null || _b === void 0 ? void 0 : _b.src.push}>
				{(_c = config === null || config === void 0 ? void 0 : config.port) === null || _c === void 0 ? void 0 : _c.label}
			</Link>
		</div>);
    var brand = (<Image width={180} height={42} src={'https://svgshare.com/i/17P8.svg'} alt={'tmwgc_brand'}></Image>);
    var burger = (<Image className={styles.burger} width={24} height={24} src={'/icons/burger.svg'} alt={'burger'}></Image>);
    var shift = (<div className={styles.shift}>
			<p>Overall</p>
		</div>);
    var swap = (<div>
			<Image width={24} height={24} src={'/icons/domain.svg'} alt={'domain'}></Image>
		</div>);
    var action = (<div className={styles.action}>
			<button>Become a partner</button>
		</div>);
    return (<div className={styles.head}>
			{burger}
			{brand}
			{shift}
			{menu}
			{swap}
			<p>Create</p>

			{action}
			{access}
		</div>);
};
export default Headbar;
//# sourceMappingURL=headbar.jsx.map