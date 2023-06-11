import { SearchOutlined } from '@ant-design/icons';
import { Button as AButton, Card, Space, Tooltip } from 'antd';
import React from 'react';

const Button: React.FC = () => {
  return (
    <Card>
      <Card title='普通按钮'>
        <Space wrap>
          <AButton type='primary'>Primary Button</AButton>
          <AButton>Default Button</AButton>
          <AButton type='dashed'>Dashed Button</AButton>
          <AButton type='text'>Text Button</AButton>
          <AButton type='link'>Link Button</AButton>
        </Space>
      </Card>
      <Card title='图标按钮'>
        <Space direction='vertical'>
          <Space wrap>
            <Tooltip title='search'>
              <AButton type='primary' shape='circle' icon={<SearchOutlined />} />
            </Tooltip>
            <AButton type='primary' shape='circle'>
              A
            </AButton>
            <AButton type='primary' icon={<SearchOutlined />}>
              Search
            </AButton>
            <Tooltip title='search'>
              <AButton shape='circle' icon={<SearchOutlined />} />
            </Tooltip>
            <AButton icon={<SearchOutlined />}>Search</AButton>
          </Space>
        </Space>
      </Card>
    </Card>
  );
};

export default Button;
