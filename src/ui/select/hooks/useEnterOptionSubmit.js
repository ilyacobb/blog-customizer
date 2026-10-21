import { useEffect } from 'react';
export const useEnterOptionSubmit = ({ onClick, value, optionRef, }) => {
    useEffect(() => {
        const option = optionRef.current;
        if (!option)
            return;
        const handleEnterKeyDown = (event) => {
            if (document.activeElement === option && event.key === 'Enter') {
                onClick(value);
            }
        };
        option.addEventListener('keydown', handleEnterKeyDown);
        return () => {
            option.removeEventListener('keydown', handleEnterKeyDown);
        };
    }, [value, onClick, optionRef]);
};
//# sourceMappingURL=useEnterOptionSubmit.js.map