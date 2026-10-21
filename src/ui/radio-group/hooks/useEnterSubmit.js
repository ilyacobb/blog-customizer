import { useEffect, useRef } from 'react';
export const useEnterSubmit = ({ onChange, option }) => {
    const optionRef = useRef(null);
    useEffect(() => {
        const optionHtml = optionRef.current;
        if (!optionHtml)
            return;
        const handleEnterKeyDown = (event) => {
            if (document.activeElement === optionHtml && event.key === 'Enter') {
                onChange === null || onChange === void 0 ? void 0 : onChange(option);
            }
        };
        optionHtml.addEventListener('keydown', handleEnterKeyDown);
        // не забываем удалять листенеры, при размонтировании компонента
        // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
        return () => {
            optionHtml.removeEventListener('keydown', handleEnterKeyDown);
        };
    }, [onChange, option]);
};
//# sourceMappingURL=useEnterSubmit.js.map