import { jsx as _jsx } from "react/jsx-runtime";
import { clsx } from 'clsx';
import { useRef } from 'react';
import { Text } from 'src/ui/text';
import { isFontFamilyClass } from './helpers/isFontFamilyClass';
import { useEnterOptionSubmit } from './hooks/useEnterOptionSubmit';
import styles from './Select.module.scss';
export const Option = (props) => {
    const { option: { value, title, optionClassName, className }, onClick, } = props;
    const optionRef = useRef(null);
    const handleClick = (clickedValue) => () => {
        onClick(clickedValue);
    };
    useEnterOptionSubmit({
        optionRef,
        value,
        onClick,
    });
    return (_jsx("li", { className: clsx(styles.option, styles[optionClassName !== null && optionClassName !== void 0 ? optionClassName : '']), value: value, onClick: handleClick(value), tabIndex: 0, "data-testid": `select-option-${value}`, ref: optionRef, children: _jsx(Text, { family: isFontFamilyClass(className) ? className : undefined, children: title }) }));
};
//# sourceMappingURL=Option.js.map