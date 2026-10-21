import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import { useState, useRef, useEffect } from 'react';
import clsx from 'clsx';
import { Select } from 'src/ui/select';
import { RadioGroup } from 'src/ui/radio-group';
import { Separator } from 'src/ui/separator';
import { fontFamilyOptions, fontColors, backgroundColors, contentWidthArr, fontSizeOptions, defaultArticleState, } from 'src/constants/articleProps';
import styles from './ArticleParamsForm.module.scss';
import { Text } from 'src/ui/text';
export const ArticleParamsForm = ({ onApply }) => {
    const [formState, setFormState] = useState(defaultArticleState);
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const formContainerRef = useRef(null);
    useEffect(() => {
        if (!isSettingsOpen)
            return;
        const handleClick = (e) => {
            var _a;
            if (e.target instanceof Node &&
                !((_a = formContainerRef.current) === null || _a === void 0 ? void 0 : _a.contains(e.target))) {
                setIsSettingsOpen(false);
            }
        };
        window.addEventListener('mousedown', handleClick);
        return () => {
            window.removeEventListener('mousedown', handleClick);
        };
    }, [isSettingsOpen]);
    const handleSubmit = (event) => {
        event.preventDefault();
        onApply(formState);
    };
    const handleReset = (event) => {
        event.preventDefault();
        setFormState(defaultArticleState);
        onApply(defaultArticleState);
    };
    const handleChange = (field) => (value) => setFormState((prevState) => (Object.assign(Object.assign({}, prevState), { [field]: value })));
    return (_jsxs("div", { ref: formContainerRef, children: [_jsx(ArrowButton, { isOpen: isSettingsOpen, onClick: () => setIsSettingsOpen((prevIsSettingsOpen) => !prevIsSettingsOpen) }), _jsx("aside", { className: clsx(styles.container, {
                    [styles.container_open]: isSettingsOpen,
                }), children: _jsxs("form", { className: styles.form, onSubmit: handleSubmit, onReset: handleReset, children: [_jsx(Text, { as: 'h2', size: 31, weight: 800, uppercase: true, children: "\u0417\u0430\u0434\u0430\u0439\u0442\u0435 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B" }), _jsx(Select, { selected: formState.fontFamilyOption, options: fontFamilyOptions, title: '\u0448\u0440\u0438\u0444\u0442', onChange: handleChange('fontFamilyOption') }), _jsx(RadioGroup, { name: 'fontsize', selected: formState.fontSizeOption, options: fontSizeOptions, title: '\u0440\u0430\u0437\u043C\u0435\u0440 \u0448\u0440\u0438\u0444\u0442\u0430', onChange: handleChange('fontSizeOption') }), _jsx(Select, { selected: formState.fontColor, options: fontColors, title: '\u0446\u0432\u0435\u0442 \u0448\u0440\u0438\u0444\u0442\u0430', onChange: handleChange('fontColor') }), _jsx(Separator, {}), _jsx(Select, { selected: formState.backgroundColor, options: backgroundColors, title: '\u0446\u0432\u0435\u0442 \u0444\u043E\u043D\u0430', onChange: handleChange('backgroundColor') }), _jsx(Select, { selected: formState.contentWidth, options: contentWidthArr, title: '\u0448\u0438\u0440\u0438\u043D\u0430 \u043A\u043E\u043D\u0442\u0435\u043D\u0442\u0430', onChange: handleChange('contentWidth') }), _jsxs("div", { className: styles.bottomContainer, children: [_jsx(Button, { title: '\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C', htmlType: 'reset', type: 'clear' }), _jsx(Button, { title: '\u041F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C', htmlType: 'submit', type: 'apply' })] })] }) })] }));
};
//# sourceMappingURL=ArticleParamsForm.js.map