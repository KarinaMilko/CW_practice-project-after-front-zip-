import React from 'react';
import withRouter from '../../hocs/withRouter';
import styles from './BackButton.module.sass';

const BackButton = props => {
  function clickHandler () {
    props.navigate(-1);
  }

  return (
    <div onClick={clickHandler} className={styles.buttonContainer}>
      <span>Back</span>
    </div>
  );
};

export default withRouter(BackButton);
