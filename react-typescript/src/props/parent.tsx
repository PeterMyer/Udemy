import { Child } from './child';

const Parent = () => {
  return <Child color="red" onClick={()=>console.log('clicked')}></Child>;
};

export default Parent;
