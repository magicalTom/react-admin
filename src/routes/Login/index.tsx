import RootObject from '@/database/RootObject';
import https from '@/utils/https';
import { setToken } from '@/utils/token';
import { Button } from 'antd';
import React, { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as SC from './styles';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: 'admin',
    password: 'admin',
  });

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setForm((old) => ({ ...old, [e.target.name]: e.target.value }));
    },
    [setForm]
  );

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const res = await https.get<RootObject<{ token: string }>>('/login', form);
      setToken(res.data.data.token);
      navigate('/', { replace: true });
    },
    [form, navigate]
  );

  return (
    <SC.Wrapper>
      <SC.Card>
        <SC.FormContainer onSubmit={handleSubmit}>
          <SC.Input name='username' placeholder='请输入账号' onChange={handleChange}></SC.Input>
          <SC.Input name='password' placeholder='请输入密码' type='password' onChange={handleChange}></SC.Input>
          <Button htmlType='submit' type='primary' block>
            登录
          </Button>
        </SC.FormContainer>
        <SC.Image />
      </SC.Card>
    </SC.Wrapper>
  );
};

export default Login;
