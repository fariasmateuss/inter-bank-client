import { FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import logo from '@assets/Inter-orange.png';

import { Modal } from '@components/Modal';
import { Input } from '@components/Input';
import { Button } from '@components/Button';

import { Wrapper, Background, ModalBox, ModalForm } from './styles';

export function SignUp() {
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    navigate(`/dashboard`);
  };

  return (
    <Wrapper>
      <Background />
      <Modal width="403px" height="auto" noShadow={false} noBorder>
        <img src={logo} alt="Bank Inter" />

        <ModalForm onSubmit={handleSubmit}>
          <Input fieldName="First Name" type="text" placeholder="Name" />
          <Input fieldName="Last Name" type="text" placeholder="Name" />
          <Input fieldName="Email" type="email" placeholder="Email" />
          <Input
            fieldName="Your Password"
            type="password"
            placeholder="Password"
          />

          <Input
            fieldName="Confirm your password"
            type="password"
            placeholder="Password"
          />

          <ModalBox>
            <Button type="submit">Sign Up</Button>
            <p>
              Already have an account? <Link to="/">Sign In</Link>
            </p>
          </ModalBox>
        </ModalForm>
      </Modal>
    </Wrapper>
  );
}
