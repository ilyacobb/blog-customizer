import { useEffect } from 'react';
export const useOutsideClickClose = ({ isOpen, rootRef, onClose, onChange, }) => {
    useEffect(() => {
        const handleClick = (event) => {
            var _a;
            const { target } = event;
            if (target instanceof Node && !((_a = rootRef.current) === null || _a === void 0 ? void 0 : _a.contains(target))) {
                isOpen && (onClose === null || onClose === void 0 ? void 0 : onClose());
                onChange === null || onChange === void 0 ? void 0 : onChange(false);
            }
        };
        if (!isOpen) {
            return;
        }
        window.addEventListener('mousedown', handleClick);
        return () => {
            window.removeEventListener('mousedown', handleClick);
        };
    }, [onClose, onChange, isOpen]);
};
//# sourceMappingURL=useOutsideClickClose.js.map