import React from 'react';
import css from './styles.scss';

export const HotReloadComponent = () => (
  <div className={css.test}>
    <div style={{ color: 'green' }}>
      This is hot reload test
    </div>
  </div>
);
