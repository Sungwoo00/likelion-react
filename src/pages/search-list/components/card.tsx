import { ColorMoodItem } from '../types';
import "../"
interface CardProps {
  item: ColorMoodItem;
}

function Card({ item }: CardProps) {
  return (
    <article>
      <h4>{item.title}</h4>
    </article>
  );
}

export default Card;