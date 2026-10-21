import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { clsx } from 'clsx';
import { useState, useRef } from 'react';
import arrowDown from 'src/images/arrow-down.svg';
import { Text } from 'src/ui/text';
import { isFontFamilyClass } from './helpers/isFontFamilyClass';
import { useEnterSubmit } from './hooks/useEnterSubmit';
import { useOutsideClickClose } from './hooks/useOutsideClickClose';
import { Option } from './Option';
import styles from './Select.module.scss';
export const Select = (props) => {
    var _a, _b;
    const { options, placeholder, selected, onChange, onClose, title } = props;
    const [isOpen, setIsOpen] = useState(false);
    const rootRef = useRef(null);
    const placeholderRef = useRef(null);
    const optionClassName = (_a = selected === null || selected === void 0 ? void 0 : selected.optionClassName) !== null && _a !== void 0 ? _a : '';
    useOutsideClickClose({
        isOpen,
        rootRef,
        onClose,
        onChange: setIsOpen,
    });
    useEnterSubmit({
        placeholderRef,
        onChange: setIsOpen,
    });
    const handleOptionClick = (option) => {
        setIsOpen(false);
        onChange === null || onChange === void 0 ? void 0 : onChange(option);
    };
    const handlePlaceHolderClick = () => {
        setIsOpen((isOpen) => !isOpen);
    };
    return (_jsxs("div", { className: styles.container, children: [title && (_jsx(_Fragment, { children: _jsx(Text, { size: 12, weight: 800, uppercase: true, children: title }) })), _jsxs("div", { className: styles.selectWrapper, ref: rootRef, "data-is-active": isOpen, "data-testid": "selectWrapper", children: [_jsx("img", { src: arrowDown, alt: "\u0438\u043A\u043E\u043D\u043A\u0430 \u0441\u0442\u0440\u0435\u043B\u043E\u0447\u043A\u0438", className: styles.arrow }), _jsx("div", { className: clsx(styles.placeholder, styles[optionClassName]), "data-status": status, "data-selected": !!(selected === null || selected === void 0 ? void 0 : selected.value), onClick: handlePlaceHolderClick, role: "button", tabIndex: 0, ref: placeholderRef, children: _jsx(Text, { family: isFontFamilyClass(selected === null || selected === void 0 ? void 0 : selected.className) ? selected === null || selected === void 0 ? void 0 : selected.className : undefined, children: (_b = selected === null || selected === void 0 ? void 0 : selected.title) !== null && _b !== void 0 ? _b : placeholder }) }), isOpen && (_jsx("ul", { className: styles.select, "data-testid": "selectDropdown", children: options
                            .filter((option) => (selected === null || selected === void 0 ? void 0 : selected.value) !== option.value)
                            .map((option) => (_jsx(Option, { option: option, onClick: () => handleOptionClick(option) }, option.value))) }))] })] }));
};
//# sourceMappingURL=Select.js.map