import { Link } from 'react-router-dom';
import data from './data';
import styles from './SecondNamingPlatform.module.sass';

function SecondNamingPlatform() {
  const mapItems = ({ icon, title, body }, i) => (
    <li key={i} className={styles.listItemsSecondNamingPlatform}>
      <img className={styles.iconSecondNamingPlatform} src={icon} alt="icon" />
      <h3 className={styles.iconHeaderSecondNamingPlatform}>{title}</h3>
      <p className={styles.iconTextSecondNamingPlatform}>{body}</p>
    </li>
  );

  return (
    <section className={styles.containerSecondNamingPlatform}>
      <h2 className={styles.headerSecondNamingPlatform}>
        Like A Naming Agency, But Better
      </h2>
      <p className={styles.textSecondNamingPlatform}>
        With Atom's managed contests, leverage our team's naming expertise and
        our pool of 300K+ naming experts. Our hybrid-solution partners you with
        a trained Atom branding consultant who will guide your crowdsourcing
        process step-by-step to get the best results possible.
      </p>
      <ul className={styles.listSecondNamingPlatform}>{data.map(mapItems)}</ul>
      <div className={styles.btnSecondNamingPlatform}>
        {' '}
        <Link to="#">
          <span className={styles.textBtn}>Learn More</span>{' '}
        </Link>
      </div>
    </section>
  );
}

export default SecondNamingPlatform;
