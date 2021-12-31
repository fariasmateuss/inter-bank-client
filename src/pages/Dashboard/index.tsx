import { useState } from 'react';

import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { Input } from '@components/Input';
import { Modal } from '@components/Modal';

import { api } from '@services/api';
import { formatPrice } from '@utils/formatPrice';
import { useAuth } from '@hooks/useAuth';
import { Statements } from './Statements';

import { Wrapper, Panels, Headline, Content } from './styles';

export function Dashboard() {
  const [key, setKey] = useState(``);
  const [value, setValue] = useState(``);
  const [generatedKey, setGeneratedKey] = useState(``);
  const { user, getCurrentUser } = useAuth();

  const balance = user.wallet;

  const handleGeneratedKey = async () => {
    const response = await api.post(`/pix/request`, {
      value,
    });
    const { copyPasteKey } = response.data;

    if (copyPasteKey) {
      setGeneratedKey(copyPasteKey);
    }
  };

  const handlePayment = async () => {
    try {
      const response = await api.post(`/pix/pay/${key}`);
      const { message } = response.data;

      if (message) {
        alert(`Payment successful!`);
      }
    } catch {
      alert(`Something went wrong with the payment`);
    } finally {
      setKey(``);
      setValue(``);
      setGeneratedKey(``);
      getCurrentUser();
    }
  };

  return (
    <>
      <Header />

      <Wrapper>
        <Panels>
          <div>
            <Modal width="90%" height="auto" noShadow>
              <Headline>
                <h2>Current balance</h2>
              </Headline>

              <Content>
                <h3>{formatPrice(balance)}</h3>
              </Content>
            </Modal>

            <Modal width="90%" height="auto" noShadow>
              <Headline>
                <h2>Pix</h2>
              </Headline>

              <Content>
                <Input
                  type="text"
                  placeholder="Enter a value to generate key"
                  value={value}
                  onChange={e => setValue(e.target.value)}
                />

                <Button type="button" onClick={handleGeneratedKey}>
                  Confirm
                </Button>
              </Content>

              {generatedKey && (
                <>
                  <p>Copy and paste your Pix</p>
                  <p>{generatedKey}</p>
                </>
              )}
            </Modal>

            <Modal width="90%" height="auto" noShadow>
              <Headline>
                <h2>Pay Pix</h2>
              </Headline>

              <Content>
                <Input
                  type="text"
                  placeholder="Enter a key"
                  value={key}
                  onChange={e => setKey(e.target.value)}
                />

                <Button type="button" onClick={handlePayment}>
                  Confirm
                </Button>
              </Content>
            </Modal>
          </div>

          <div id="statement">
            <Modal width="90%" height="auto" noShadow>
              <Headline>
                <h2>Account statement</h2>
              </Headline>

              <Statements />
            </Modal>
          </div>
        </Panels>
      </Wrapper>
    </>
  );
}
