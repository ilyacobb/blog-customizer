import { jsx as _jsx } from "react/jsx-runtime";
import { clsx } from 'clsx';
import { Text } from 'src/ui/text';
import styles from './Button.module.scss';
export const Button = ({ title, onClick, htmlType, type, }) => {
    return (_jsx("button", { className: clsx(styles.button, { [styles.button_apply]: type === 'apply' }, { [styles.button_clear]: type === 'clear' }), type: htmlType, onClick: onClick, children: _jsx(Text, { weight: 800, uppercase: true, children: title }) }));
};
//# sourceMappingURL=Button.js.map