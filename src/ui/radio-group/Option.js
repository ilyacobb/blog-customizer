import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef } from 'react';
import { Text } from 'src/ui/text';
import { useEnterSubmit } from './hooks/useEnterSubmit';
import styles from './RadioGroup.module.scss';
export const Option = (props) => {
    const { value, title, selected, groupName, onChange, option } = props;
    const optionRef = useRef(null);
    const handleChange = () => onChange === null || onChange === void 0 ? void 0 : onChange(option);
    useEnterSubmit({ onChange, option });
    const inputId = `${groupName}_radio_item_with_value__${value}`;
    const isChecked = value === selected.title;
    return (_jsxs("div", { className: styles.item, "data-checked": isChecked, "data-testid": inputId, tabIndex: 0, ref: optionRef, children: [_jsx("input", { className: styles.input, type: "radio", name: groupName, id: inputId, value: value, onChange: handleChange, tabIndex: -1 }), _jsx("label", { className: styles.label, htmlFor: inputId, children: _jsx(Text, { size: 18, uppercase: true, children: title }) })] }, value));
};
//# sourceMappingURL=Option.js.map