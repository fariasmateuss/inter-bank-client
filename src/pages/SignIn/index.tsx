import 'regenerator-runtime/runtime';
import { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import logo from '@assets/Inter-orange.png';

import { Modal } from '@components/Modal';
import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { Error } from '@components/Error';
import { useAuth } from '@hooks/useAuth';

import { Wrapper, ModalBox, ModalForm, Background } from './styles';

export function SignIn() {
  const [email, setEmail] = useState(``);
  const [password, setPassword] = useState(``);
  const [inputError, setInputError] = useState(``);

  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const credentials = {
      email,
      password,
    };

    if (!credentials.email || !credentials.password) {
      setInputError(`Please fill out all fields`);
      return;
    }

    try {
      await signIn(credentials);
      navigate(`/dashboard`);
    } catch {
      setInputError(`Invalid email or password`);
    }
  };

  return (
    <Wrapper>
      <Background />
      <Modal width="403px" height="auto" noShadow={false}>
        <img src={logo} alt="Bank Inter" />

        <ModalForm onSubmit={handleSubmit}>
          <Input
            fieldName="Email"
            type="email"
            placeholder="Type your email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Input
            fieldName="Password"
            type="password"
            placeholder="Type your password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          {inputError && <Error showError={inputError} />}

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
