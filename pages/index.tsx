import React, {useState} from 'react';
import { Htag, Button, Paragraph, Tag, Rating } from '../components';



export default function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(4);
  
  return (
    <div>
      <Htag tag={'h1'}>Tekstas</Htag>
      <Button appearance='primary' arrow='right'>Press me</Button>
      <Button appearance='ghost' arrow='down'>Press me</Button>
      <Paragraph size='medium'>Paragrafas</Paragraph>
      <Tag size='medium' color='green' href='www.google.lt' >Bablo</Tag>
      <Rating rating={rating} isEditable setRating={setRating}/>
    </div>
  );
}
