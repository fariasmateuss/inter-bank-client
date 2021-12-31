import { useEffect, useState } from 'react';
import { FiDollarSign } from 'react-icons/fi';

import { formatPrice } from '@utils/formatPrice';
import { formatDate } from '@utils/formatDate';
import { api } from '@services/api';

import { Wrapper, Container } from './styles';

type Transaction = {
  user: {
    firstName: string;
    lastName: string;
  };
  value: number;
  type: 'paid' | 'received';
  updatedAt: Date;
};

type Statement = {
  transactions: Transaction[];
};

export function Transactions({ user, value, type, updatedAt }: Transaction) {
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

export function Statements() {
  const [statements, setStatements] = useState<Transaction[]>([]);

  useEffect(() => {
    (async () => {
      const response = await api.get<Statement>(`/pix/transactions`);
      const { transactions } = response.data;

      setStatements(transactions);
    })();
  }, [statements]);

  return (
    <Wrapper>
      {statements.length > 0 ? (
        statements.map((statement, index) => (
          <Transactions key={String(index)} {...statement} />
        ))
      ) : (
        <p>Ah... is empty!</p>
      )}
    </Wrapper>
  );
}
