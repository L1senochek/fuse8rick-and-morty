import { FC, ReactElement } from 'react';

import IFallbackProps from '@/model/ErrorBoundaryFallback.ts';

import styles from './error-boundary-fallback.module.scss';

const ErrorBoundaryFallback: FC<IFallbackProps> = ({
  error,
  onReset,
}): ReactElement => {
  return (
    <div className={styles['error-boundary']}>
      <h2 className={styles['error-boundary__title']}>Something went wrong!</h2>
      <p className={styles['error-boundary__message']}>{error?.message}</p>
      <button onClick={onReset}>Back</button>
    </div>
  );
};

export default ErrorBoundaryFallback;
