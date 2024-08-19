import React from 'react';
import { ClipLoader } from 'react-spinners';
import styles from './Spinner.module.sass';

const override = { borderСolor: '#46568a' };

const SpinnerLoader = () => (
  <div className={styles.loaderContainer}>
    <ClipLoader cssOverride={override} size={50} color='#46568a' />
  </div>
);

export default SpinnerLoader;
