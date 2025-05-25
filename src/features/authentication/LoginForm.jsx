import { useState } from "react";
import { Link } from "react-router-dom";

import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FormRowVertical from "../../ui/FormRowVertical";
import styled from "styled-components";
import useLogin from "./useLogin";
import SpinnerMini from "../../ui/SpinnerMini";

const StyledLink = styled(Link)`
  color: var(--color-brand-500);
  padding-left: 8px;
  font-weight: 500;
`;

function LoginForm() {
  const [email, setEmail] = useState("ajakatomi@gmail.com");
  const [password, setPassword] = useState("isthisthereallife");
  const { login, isPending } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if (email && password) {
      const credentials = { email, password };
      login(credentials, {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      });
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label="Email address">
        <Input
          type="email"
          id="email"
          // This makes this form better for password managers
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormRowVertical>
      <FormRowVertical label="Password">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button
          variation="primary"
          size="large"
          disabled={isPending}
          onClick={handleSubmit}>
          {isPending ? <SpinnerMini /> : "Login"}
        </Button>
      </FormRowVertical>
    </Form>
  );
}

export default LoginForm;
