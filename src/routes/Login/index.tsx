import RootObject from '@/database/RootObject';
import { tokenAtom } from '@/recoil/user';
import https from '@/utils/https';
import { Button } from 'antd';
import React, { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import * as SC from './styles';

const Login: React.FC = () => {
  const setToken = useSetRecoilState(tokenAtom);
  const [form, setForm] = useState({
    username: '',
    password: '',
  });

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setForm((old) => ({ ...old, [e.target.name]: e.target.value }));
  }, []);

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const res = await https.get<RootObject<{ token: string }>>('/login', form);
      setToken(res.data.data.token);
    },
    [form, setToken]
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
