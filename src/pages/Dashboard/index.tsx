import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { Input } from '@components/Input';
import { Modal } from '@components/Modal';

import { formatPrice } from '@utils/formatPrice';
import { Statement } from './Statement';

import { Wrapper, Panels, Headline, Content } from './styles';

export function Dashboard() {
  const balance = 6000;

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
                />

                <Button type="button">Confirm</Button>
              </Content>

              <p>Copy and paste your Pix</p>
              <p>fhdajghjqkphfgja</p>
            </Modal>

            <Modal width="90%" height="auto" noShadow>
              <Headline>
                <h2>Pay Pix</h2>
              </Headline>

              <Content>
                <Input type="text" placeholder="Enter a key" />

                <Button type="button">Confirm</Button>
              </Content>
            </Modal>
          </div>

          <div id="statement">
            <Modal width="90%" height="auto" noShadow>
              <Headline>
                <h2>Account statement</h2>
              </Headline>

              <Statement />
            </Modal>
          </div>
        </Panels>
      </Wrapper>
    </>
  );
}
