import { useEffect } from 'react';
export const useEnterSubmit = ({ placeholderRef, onChange, }) => {
    useEffect(() => {
        const placeholderEl = placeholderRef.current;
        if (!placeholderEl)
            return;
        const handleEnterKeyDown = (event) => {
            if (event.key === 'Enter') {
                onChange((isOpen) => !isOpen);
            }
        };
        placeholderEl.addEventListener('keydown', handleEnterKeyDown);
        return () => {
            placeholderEl.removeEventListener('keydown', handleEnterKeyDown);
        };
    }, []);
};
//# sourceMappingURL=useEnterSubmit.js.map