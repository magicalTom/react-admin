import { SettingOutlined, UserOutlined } from '@ant-design/icons';
import { Card, Cascader, Col, Input, InputNumber, Row, Select, Space } from 'antd';
import React from 'react';

const selectBefore = (
  <Select defaultValue='http://'>
    <Select.Option value='http://'>http://</Select.Option>
    <Select.Option value='https://'>https://</Select.Option>
  </Select>
);
const selectAfter = (
  <Select defaultValue='.com'>
    <Select.Option value='.com'>.com</Select.Option>
    <Select.Option value='.jp'>.jp</Select.Option>
    <Select.Option value='.cn'>.cn</Select.Option>
    <Select.Option value='.org'>.org</Select.Option>
  </Select>
);

const selectBeforeN = (
  <Select defaultValue='add' style={{ width: 60 }}>
    <Select.Option value='add'>+</Select.Option>
    <Select.Option value='minus'>-</Select.Option>
  </Select>
);
const selectAfterN = (
  <Select defaultValue='USD' style={{ width: 60 }}>
    <Select.Option value='USD'>$</Select.Option>
    <Select.Option value='EUR'>€</Select.Option>
    <Select.Option value='GBP'>£</Select.Option>
    <Select.Option value='CNY'>¥</Select.Option>
  </Select>
);

const InputPage: React.FC = () => {
  return (
    <Card>
      <Row gutter={10}>
        <Col span={12}>
          <Card title='大小'>
            <Input size='large' placeholder='large size' prefix={<UserOutlined />} />
            <br />
            <br />
            <Input placeholder='default size' prefix={<UserOutlined />} />
            <br />
            <br />
            <Input size='small' placeholder='small size' prefix={<UserOutlined />} />
          </Card>
        </Col>
        <Col span={12}>
          <Card title='组合'>
            <Space direction='vertical' style={{ width: '100%' }}>
              <Input addonBefore='http://' addonAfter='.com' defaultValue='mysite' />
              <Input addonBefore={selectBefore} addonAfter={selectAfter} defaultValue='mysite' />
              <Input addonAfter={<SettingOutlined />} defaultValue='mysite' />
              <Input addonBefore='http://' suffix='.com' defaultValue='mysite' />
              <Input addonBefore={<Cascader placeholder='cascader' style={{ width: 150 }} />} defaultValue='mysite' />
            </Space>
          </Card>
        </Col>
        <Col span={12}>
          <Card title='数字'>
            <Space direction='vertical' style={{ width: '100%' }}>
              <InputNumber addonBefore='+' addonAfter='$' defaultValue={100} />
              <InputNumber addonBefore={selectBeforeN} addonAfter={selectAfterN} defaultValue={100} />
              <InputNumber addonAfter={<SettingOutlined />} defaultValue={100} />
              <InputNumber
                addonBefore={<Cascader placeholder='cascader' style={{ width: 150 }} />}
                defaultValue={100}
              />
            </Space>
          </Card>
        </Col>
      </Row>
    </Card>
  );
};

export default InputPage;
