import React from 'react';
import { Htag, Button } from '../components';


export default function Home(): JSX.Element {
  
  return (
    <div>
      <Htag tag={'h1'}>Tekstas</Htag>
      <Button appearance='primary'>Press me</Button>
      <Button appearance='ghost'>Press me</Button>
    </div>
  );
}
