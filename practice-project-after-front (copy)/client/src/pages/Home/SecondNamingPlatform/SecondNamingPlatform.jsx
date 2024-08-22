import { Link } from 'react-router-dom';
import data from './data';

function SecondNamingPlatform() {
  const mapItems = ({ icon, title, body }, i) => {
    <li key={i}>
      <img src={icon} alt="icon" />
      <h3>{title}</h3>
      <p>{body}</p>
    </li>;
  };

  return (
    <section>
      <h2>Like A Naming Agency, But Better</h2>
      <p>
        With Atom's managed contests, leverage our team's naming expertise and
        our pool of 300K+ naming experts. Our hybrid-solution partners you with
        a trained Atom branding consultant who will guide your crowdsourcing
        process step-by-step to get the best results possible.
      </p>
      <ul>{data.map(mapItems)}</ul>
      <Link to="#">Learn More</Link>
    </section>
  );
}

export default SecondNamingPlatform;
