import Card from './card';
import { ColorMoodItem } from '../types';

interface SearchedListProps {
  list: ColorMoodItem[];
}

function SearchedList({ list }: SearchedListProps) {
  return (
    <section>
      <h3>검색 리스트</h3>
      <ul>
        {list.map((item) => (
          <li key={item.id}>
            <Card item={item} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default SearchedList;