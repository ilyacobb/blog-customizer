import { jsx as _jsx } from "react/jsx-runtime";
import { createElement, useState } from 'react';
import { ArrowButton } from './ArrowButton';
const meta = {
    component: ArrowButton,
};
export default meta;
export const ArrowButtonStory = {
    render: () => createElement(() => {
        const [isOpen, setIsOpen] = useState(false);
        return _jsx(ArrowButton, { isOpen: isOpen, onClick: () => setIsOpen(!isOpen) });
    }),
};
//# sourceMappingURL=ArrowButton.stories.js.map