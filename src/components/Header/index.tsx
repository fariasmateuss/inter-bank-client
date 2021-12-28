import { Link } from 'react-router-dom';

import logo from '@assets/Inter-orange.png';
import { Initials } from '@components/Initials';

import { CustomHeader } from './styles';

export function Header() {
  return (
    <CustomHeader>
      <img src={logo} alt="Bank Inter" />

      <div>
        <Initials initials="JD" />

        <div>
          <p>
            Hi, <span>John Doe</span>
          </p>

          <Link to="/">Logoff</Link>
        </div>
      </div>
    </CustomHeader>
  );
}
