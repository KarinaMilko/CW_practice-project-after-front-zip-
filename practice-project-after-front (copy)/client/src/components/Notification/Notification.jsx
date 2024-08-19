import React from 'react';
import withRouter from '../../hocs/withRouter';
import styles from './Notification.module.sass';

const Notification = props => (
  <div>
    <br />
    <span>{props.message}</span>
    <br />
    {props.contestId && (
      <span
        onClick={() => props.navigate(`/contest/${props.contestId}`)}
        className={styles.goToContest}
      >
        Go to contest
      </span>
    )}
  </div>
);

export default withRouter(Notification);
