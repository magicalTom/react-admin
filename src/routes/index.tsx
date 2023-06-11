import Layout from '@/routes/_Layout';
import { ConfigProvider } from 'antd';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import Home from './Home';
import Login from './Login';
import Permissions from './Permissions';
import Text from './Text';
import Button from './form/Button';
import InputPage from './form/Input';
import Validate from './form/Validate';

const BaseRoutes: React.FC = () => {
  return (
    <ConfigProvider>
      <BrowserRouter basename='/'>
        <Permissions>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/' element={<Layout />}>
              <Route index element={<Home />} />
              <Route path='dashboard' element={<Dashboard />} />
              <Route path='input' element={<InputPage />} />
              <Route path='validate' element={<Validate />} />
              <Route path='button' element={<Button />} />
              <Route path='text' element={<Text />} />
            </Route>
          </Routes>
        </Permissions>
      </BrowserRouter>
    </ConfigProvider>
  );
};

export default BaseRoutes;
