import { jsx as _jsx } from "react/jsx-runtime";
import styles from './StoryDecorator.module.scss';
export const StoryDecorator = (Story) => (_jsx("div", { className: styles.storybookContainer, children: _jsx(Story, {}) }));
//# sourceMappingURL=StoryDecorator.js.map