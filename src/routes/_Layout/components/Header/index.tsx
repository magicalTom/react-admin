import { GithubOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Space } from 'antd';
import React from 'react';
import { useRecoilState } from 'recoil';
import { collapsedAtom } from '../../atom';
import * as SC from './styles';

const Header: React.FC = () => {
  const [collapsed, setCollapsed] = useRecoilState(collapsedAtom);

  return (
    <SC.Header>
      <SC.Container onClick={() => setCollapsed(!collapsed)}>
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </SC.Container>
      <Space size={'middle'}>
        <SC.Container>
          <GithubOutlined />
        </SC.Container>
        <SC.Container>
          <SC.Avatar src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.8qQmyjRmDOTdJ9yT3cCaxwHaIK%26pid%3DApi&f=1&ipt=a7b9a4534b2046f831ddae5b1e6701c50d1a0a709eef8ce9878b2e162a3d16d9&ipo=images' />
        </SC.Container>
      </Space>
    </SC.Header>
  );
};

export default Header;
