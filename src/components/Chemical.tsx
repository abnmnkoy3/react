import React, { useState } from 'react';
// import { Divider, Steps } from 'antd';
import Login from '../login'
import Fristpage from './Pagesteps/Management_chemical';
const App: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const onChange = (value: number) => {
    console.log('onChange:', value);
    setCurrent(value);
  };
  const description = 'This is a description.';

  return (
    <>
      <Fristpage />
    </>
  );
};

export default App;