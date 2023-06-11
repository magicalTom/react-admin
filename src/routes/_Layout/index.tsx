import { ContainerOutlined, HomeOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu, theme } from 'antd';
import React, { useCallback } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { collapsedAtom } from './atom';
import { default as CHeader } from './components/Header';

const { Header, Content, Footer, Sider } = Layout;

const items: MenuProps['items'] = [
  {
    key: 'dashboard',
    icon: <HomeOutlined />,
    label: '图表',
  },
  {
    key: 'form-parent',
    label: 'Form',
    icon: <ContainerOutlined />,
    children: [
      { key: 'input', label: 'Input' },
      { key: 'validate', label: 'Validate' },
      { key: 'button', label: 'Button' },
    ],
  },
  { key: 'text', label: '富文本', icon: <ContainerOutlined /> },
];

const MainLayout: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const collapsed = useRecoilValue(collapsedAtom);
  const navigate = useNavigate();
  const location = useLocation();

  const handleMenuClick = useCallback(
    ({ key }: { key: string }) => {
      navigate(key);
    },
    [navigate]
  );

  return (
    <Layout hasSider>
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
          width: 'auto',
        }}
        trigger={null}
        collapsed={collapsed}
        collapsible
      >
        <Menu
          mode='inline'
          theme='dark'
          defaultSelectedKeys={[location.pathname.replace('/', '')]}
          items={items}
          onClick={handleMenuClick}
        />
      </Sider>
      <Layout style={{ marginLeft: collapsed ? 80 : 200, transition: 'all ease-in-out 0.2s' }}>
        <Header style={{ padding: '0 10px', background: colorBgContainer }}>
          <CHeader />
        </Header>
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <Outlet />
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
