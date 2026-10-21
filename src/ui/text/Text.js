import { jsx as _jsx } from "react/jsx-runtime";
import { clsx } from 'clsx';
import styles from './index.module.scss';
export const Text = ({ children, as: Tag = 'div', size = 18, dynamic = false, weight = 400, fontStyle = 'normal', uppercase = false, align = 'left', family = 'open-sans', dynamicLite = false, }) => {
    const className = clsx(styles.text, styles[`size${size}`], { [styles.dynamic]: dynamic }, styles[`weight${weight}`], styles[`${fontStyle}`], { [styles.uppercase]: uppercase }, styles[`${align}`], styles[`${family}`], { [styles.dynamicLite]: dynamicLite });
    return _jsx(Tag, { className: className, children: children });
};
//# sourceMappingURL=Text.js.map