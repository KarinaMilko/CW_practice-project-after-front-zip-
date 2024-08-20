import { Link } from 'react-router-dom';
import sectionLogo from './nh-layer.svg';
import styles from './NamingContest.module.sass';

function NamingContest() {
  return (
    <section className={styles.sectionContainer}>
      <img className={styles.sectionLogo} src={sectionLogo} alt="icon" />
      <div>
        <h2 className={styles.sectionHeading}>Atom Naming Contests</h2>
        <p className={styles.sectionInfo}>
          Custom name suggestions from 100s of naming experts as you are guided
          through our naming agency-style process
        </p>
      </div>
      <Link className={styles.startContestLink} to="/startContest">
        Get a Custom Name
      </Link>
    </section>
  );
}

export default NamingContest;
