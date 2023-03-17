import React, { useState } from 'react';
import { Divider, Steps } from 'antd';
import Login from '../login'
import Fristpage from './Pagesteps/Firstpage';
const App: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const onChange = (value: number) => {
    console.log('onChange:', value);
    setCurrent(value);
  };
  const description = 'This is a description.';

  return (
    <>
      <Steps
        current={current}
        onChange={onChange}
        direction="vertical"
        items={[
          {
            title: 'Step 1',
            description:<Fristpage/>,
          },
          {
            title: 'Step 2',
            description,
          },
          {
            title: 'Step 3',
            description,
          },
        ]}
      />
    </>
  );
};

export default App;