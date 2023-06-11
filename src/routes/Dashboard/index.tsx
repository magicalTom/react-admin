import { Card } from 'antd';
import React from 'react';
import Gradient from './components/Gradient';
import Rain from './components/Rain';

const Dashboard: React.FC = () => {
  return (
    <div>
      <Card style={{ background: 'none' }}>
        <Gradient />
      </Card>
      <Card>
        <Rain />
      </Card>
    </div>
  );
};

export default Dashboard;
