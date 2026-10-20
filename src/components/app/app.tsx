import { useState } from 'react';
import type { CSSProperties } from 'react';
import { clsx } from 'clsx';

import {
  defaultArticleState,
  ArticleStateType,
} from '@/constants/articleProps.ts';

import { ArticleParamsForm } from '@components/article-params-form';
import { Article } from '../article/Article';

import styles from './app.module.scss';

export const App = (): React.JSX.Element => {

  const [articleState, setArticleState] =
    useState<ArticleStateType>(defaultArticleState);

  const handleApply = (newState: ArticleStateType) => {
    setArticleState(newState);
  };

  return (
    <main
      className={clsx(styles.main)}
      style={
        {
          
          '--font-family': articleState.fontFamilyOption.value,
          '--font-size': articleState.fontSizeOption.value,
          '--font-color': articleState.fontColor.value,
          '--container-width': articleState.contentWidth.value,
          '--bg-color': articleState.backgroundColor.value,
        } as CSSProperties
      }
    >
      <ArticleParamsForm onApply={handleApply} />
      <Article />
    </main>
  );
};