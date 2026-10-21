import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { clsx } from 'clsx';
import { defaultArticleState, } from '@/constants/articleProps.ts';
import { ArticleParamsForm } from '@components/article-params-form';
import { Article } from '../article/Article';
import styles from './app.module.scss';
export const App = () => {
    const [articleState, setArticleState] = useState(defaultArticleState);
    const handleApply = (newState) => {
        setArticleState(newState);
    };
    return (_jsxs("main", { className: clsx(styles.main), style: {
            '--font-family': articleState.fontFamilyOption.value,
            '--font-size': articleState.fontSizeOption.value,
            '--font-color': articleState.fontColor.value,
            '--container-width': articleState.contentWidth.value,
            '--bg-color': articleState.backgroundColor.value,
        }, children: [_jsx(ArticleParamsForm, { onApply: handleApply }), _jsx(Article, {})] }));
};
//# sourceMappingURL=app.js.map