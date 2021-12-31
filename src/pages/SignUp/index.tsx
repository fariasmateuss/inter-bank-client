import { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import logo from '@assets/Inter-orange.png';

import { Modal } from '@components/Modal';
import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { Error } from '@components/Error';
import { useAuth } from '@hooks/useAuth';

import { Wrapper, Background, ModalBox, ModalForm } from './styles';

export function SignUp() {
  const [email, setEmail] = useState(``);
  const [password, setPassword] = useState(``);
  const [confirmPassword, setConfirmPassword] = useState(``);
  const [firstName, setFirstName] = useState(``);
  const [lastName, setLastName] = useState(``);
  const [error, setError] = useState(``);

  const { signUp } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newUser = { email, password, firstName, lastName };

    if (
      !newUser.email ||
      !newUser.password ||
      !newUser.firstName ||
      !newUser.lastName
    ) {
      setError(`Please fill out all fields`);
      return;
    }

    if (password !== confirmPassword) {
      setError(`Passwords do not match`);
      return;
    }

    if (password.length < 6) {
      setError(`Password must be at least 6 characters`);
      return;
    }

    try {
      await signUp(newUser);
      navigate(`/dashboard`);
    } catch {
      setError(`Something went wrong with the sign up`);
    }
  };

  return (
    <Wrapper>
      <Background />
      <Modal width="403px" height="auto" noShadow={false}>
        <img src={logo} alt="Bank Inter" />

        <ModalForm onSubmit={handleSubmit}>
          <Input
            fieldName="First Name"
            type="text"
            placeholder="Name"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
          />
          <Input
            fieldName="Last Name"
            type="text"
            placeholder="Name"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
          />
          <Input
            fieldName="Email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Input
            fieldName="Your Password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <Input
            fieldName="Confirm your password"
            type="password"
            placeholder="Password"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
          />

          {error && <Error showError={error} />}

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
