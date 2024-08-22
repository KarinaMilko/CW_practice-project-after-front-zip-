import { Link } from 'react-router-dom';
import data from './data';
import CONSTANTS from './../../../constants';

const { STATIC_IMAGES_PATH } = CONSTANTS;

function FirstNamingPlatform() {
  const mapItems = ({ icon, title, body }, i) => (
    <li key={i}>
      <img src={icon} alt="icon" />
      <h3>{title}</h3>
      <p>{body}</p>
    </li>
  );

  return (
    <section>
      <h2>Atom: The World's #1 Business Naming Platform</h2>
      <ul>{data.map(mapItems)}</ul>
      <div>
        <img src={`${STATIC_IMAGES_PATH}home/nh-theworld5.svg`} alt="icon" />
        <p>The Ultra Premium Marketplace Is Here</p>
        <Link to="#">Explore now</Link>
      </div>
    </section>
  );
}

export default FirstNamingPlatform;
