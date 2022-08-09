import React from 'react';
import { Htag, Button, Paragraph, Tag } from '../components';



export default function Home(): JSX.Element {
  
  return (
    <div>
      <Htag tag={'h1'}>Tekstas</Htag>
      <Button appearance='primary' arrow='right'>Press me</Button>
      <Button appearance='ghost' arrow='down'>Press me</Button>
      <Paragraph size='medium'>Paragrafas</Paragraph>
      <Tag size='medium' color='green' >Bablo</Tag>
    </div>
  );
}
