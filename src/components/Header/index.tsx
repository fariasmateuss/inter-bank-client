import { Link } from 'react-router-dom';

import logo from '@assets/Inter-orange.png';

import { Initials } from '@components/Initials';
import { useAuth } from '@hooks/useAuth';

import { CustomHeader } from './styles';

export function Header() {
  const { user } = useAuth();
  const initials =
    user.firstName.substring(0, 1) + user.lastName.substring(0, 1);

  return (
    <CustomHeader>
      <img src={logo} alt="Bank Inter Logo" />

      <div>
        <Initials initials={initials} />

        <div>
          <p>
            Hi,{` `}
            <span>
              {user.firstName} {user.lastName}
            </span>
          </p>
          <strong>
            {user.accountNumber}-{user.accountDigit}
          </strong>

          <Link to="/">Logoff</Link>
        </div>
      </div>
    </CustomHeader>
  );
}
