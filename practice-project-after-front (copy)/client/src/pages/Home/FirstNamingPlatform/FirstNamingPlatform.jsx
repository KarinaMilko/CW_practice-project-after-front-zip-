import { Link } from 'react-router-dom';
import data from './data.json';

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
        <img src="/staticImages/home/nh-theworld5.svg" alt="icon" />
        <p>The Ultra Premium Marketplace Is Here</p>
        <Link to="#">Explore nowUltra Premium Marketplace</Link>
      </div>
    </section>
  );
}

export default FirstNamingPlatform;
