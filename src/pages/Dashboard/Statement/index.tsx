import { FiDollarSign } from 'react-icons/fi';

import { formatPrice } from '@utils/formatPrice';
import { formatDate } from '@utils/formatDate';

import { Wrapper, Container } from './styles';

type StatementProps = {
  user: {
    firstName: string;
    lastName: string;
  };
  value: number;
  type: 'paid' | 'received';
  updatedAt: Date;
};

export function AllTransactions({
  user,
  value,
  type,
  updatedAt,
}: StatementProps) {
  return (
    <Container type={type}>
      <span>
        <FiDollarSign size={24} />
      </span>

      <div>
        <p>{formatPrice(value)}</p>
        <p>
          {type === `paid` ? `Paid to` : `Received from`}
          {` `}
          <strong>
            {user.firstName} {user.lastName}
          </strong>
        </p>
        <p>{formatDate(updatedAt)}</p>
      </div>
    </Container>
  );
}

export function Statement() {
  const transactions: StatementProps[] = [
    {
      user: {
        firstName: `John`,
        lastName: `Doe`,
      },
      value: 25000,
      type: `paid`,
      updatedAt: new Date(),
    },
    {
      user: {
        firstName: `Mateus`,
        lastName: `V. Farias`,
      },
      value: 30000,
      type: `received`,
      updatedAt: new Date(),
    },
  ];

  return (
    <Wrapper>
      {transactions.length > 0 ? (
        transactions.map(transaction => (
          <AllTransactions key={transaction.value} {...transaction} />
        ))
      ) : (
        <p>Ah... is empty!</p>
      )}
    </Wrapper>
  );
}
