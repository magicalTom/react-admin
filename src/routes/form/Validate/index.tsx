import { Button, Card, Col, Form, Input, Row } from 'antd';
import React, { useCallback } from 'react';

const Validate: React.FC = () => {
  const [form] = Form.useForm();

  const handleFinish = useCallback((values: Record<string, string>) => {
    console.log(values);
  }, []);

  return (
    <Row>
      <Col span={12}>
        <Card title='Form 表单'>
          <Form form={form} autoComplete='off' onFinish={handleFinish}>
            <Form.Item label='姓名' name={'username'} rules={[{ message: '请输入姓名', required: true }]}>
              <Input placeholder='请输入姓名' />
            </Form.Item>
            <Form.Item label='密码' name={'password'} rules={[{ message: '请输入密码', required: true }]}>
              <Input.Password placeholder='请输入密码' />
            </Form.Item>
            <Form.Item>
              <Button htmlType='submit' type='primary'>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default Validate;
