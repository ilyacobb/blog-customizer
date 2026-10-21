import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Text } from 'src/ui/text';
import { Option } from './Option';
import styles from './RadioGroup.module.scss';
export const RadioGroup = (props) => {
    const { name, options, selected, onChange, title } = props;
    const handleChange = (option) => onChange === null || onChange === void 0 ? void 0 : onChange(option);
    return (_jsxs("div", { className: styles.container, children: [title && (_jsx(_Fragment, { children: _jsx(Text, { weight: 800, size: 12, uppercase: true, children: title }) })), _jsx("div", { className: styles.group, children: options.map((option) => (_jsx(Option, { groupName: name, value: option.value, title: option.title, selected: selected, onChange: () => handleChange(option), option: option }, option.value))) })] }));
};
//# sourceMappingURL=RadioGroup.js.map