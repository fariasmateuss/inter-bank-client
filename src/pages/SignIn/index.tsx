import { FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import logo from '@assets/Inter-orange.png';

import { Modal } from '@components/Modal';
import { Input } from '@components/Input';
import { Button } from '@components/Button';

import { Wrapper, Background, ModalBox, ModalForm } from './styles';

export function SignIn() {
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    navigate(`/dashboard`);
  };

  return (
    <Wrapper>
      <Background />
      <Modal width="403px" height="auto" noShadow={false}>
        <img src={logo} alt="Bank Inter" />

        <ModalForm onSubmit={handleSubmit}>
          <Input fieldName="Name" type="email" placeholder="Type your email" />
          <Input
            fieldName="Password"
            type="password"
            placeholder="Type your password"
          />

          <ModalBox>
            <Button type="submit">Sign In</Button>
            <p>
              Don`t have an account? <Link to="/signup">Sign Up</Link>
            </p>
          </ModalBox>
        </ModalForm>
      </Modal>
    </Wrapper>
  );
}
