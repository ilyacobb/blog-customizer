import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { RadioGroup } from './RadioGroup';
const meta = {
    component: RadioGroup,
};
export default meta;
const RadioGroupWithState = () => {
    const options = [
        { title: '1 опция', value: '1 опция', className: '' },
        { title: '2 опция', value: '2 опция', className: '' },
        { title: '3 опция', value: '3 опция', className: '' },
        { title: '4 опция', value: '4 опция', className: '' },
    ];
    const [selected, setSelected] = useState(options[0]);
    return (_jsx(_Fragment, { children: _jsx(RadioGroup, { selected: selected, name: "radio", onChange: setSelected, options: options, title: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0440\u0430\u0434\u0438\u043E\u0433\u0440\u0443\u043F\u043F\u044B" }) }));
};
export const RadioGroupStory = {
    render: () => _jsx(RadioGroupWithState, {}),
};
//# sourceMappingURL=RadioGroup.stories.js.map