import { useState } from 'react';
import { tm } from '@/utils/tw-merge';
import AccordionItem, { type AccordionItemType } from './accordion-item';
import { AccordionOpenedCount } from './accordion-opened-count';

interface AccordionListProps {
  title: string;
}

const INITIAL_ACCORDION_ITEMS: AccordionItemType[] = [
  {
    id: 'item-1',
    title: '넷플릭스는 무엇인가요?',
    children: (
      <>
        <p>
          넷플릭스는 각종 수상 경력에 빛나는 시리즈, 영화, 애니메이션,
          다큐멘터리 등 다양한 콘텐츠를 인터넷 연결이 가능한 수천 종의
          디바이스에서 시청할 수 있는 스트리밍 서비스입니다.
        </p>
        <p>
          저렴한 월 요금으로 원하는 시간에 원하는 만큼 즐길 수 있습니다.
          무궁무진한 콘텐츠가 준비되어 있으며 매주 새로운 시리즈와 영화가
          제공됩니다.
        </p>
      </>
    ),
    open: false,
  },
  {
    id: 'item-2',
    title: '넷플릭스는 요금은 얼마인가요?',
    children: (
      <>
        <p>
          스마트폰, 태블릿, 스마트 TV, 노트북, 스트리밍 디바이스 등 다양한
          디바이스에서 월정액 요금 하나로 넷플릭스를 시청하세요. 멤버십 요금은
          월 5,500원부터 17,000원까지 다양합니다. 추가 비용이나 약정이 없습니다.
        </p>
      </>
    ),
    open: false,
  },
];

function AccordionList({ title }: AccordionListProps) {
  // 하위 컴포넌트가 가진 상태를 제거하고, 상위 컴포넌트로 상태를 끌어올린다.
  // 다만, 하위 컴포넌트 개별 상태를 효과적으로 관리하려면 집합 형태로 관리가 필요하다.
  // [상태]
  const [items, setItems] = useState<AccordionItemType[]>(
    INITIAL_ACCORDION_ITEMS
  );

  // [상태 업데이트 함수]

  // general function
  // const generateUpdateHandler = function (index: number) {
  //   // 이벤트 핸들러 생성 함수 (이벤트 핸들러 함수 반환)
  //   return function handleUpdateItem() {
  //     console.log(`update ${index} item opended`);
  //   };
  // };

  // arrow function
  const generateUpdateHandler = (index: number) => () => {
    // 상태 변수 업데이트 로직 작성
    const nextItems = items.map((item, i) => {
      return index !== i ? item : { ...item, open: !item.open };
    });

    setItems(nextItems);
  };

  // [파생된 상태]
  // items 배열의 원소(아이템, 항목) 중 open 상태인 것은 몇 개인가요?
  const openedItemCount = items.reduce(
    (count, item) => count + (item.open ? 1 : 0),
    0
  );

  return (
    <article className={tm('flex flex-col space-y-4 items-center', 'mt-10')}>
      <h3 className="sr-only">{title}</h3>
      <AccordionOpenedCount>{openedItemCount}</AccordionOpenedCount>
      {items.map((item, index) => (
        <AccordionItem
          key={item.id}
          title={item.title}
          open={item.open}
          onUpdate={generateUpdateHandler(index)}
        >
          {item.children}
        </AccordionItem>
      ))}
    </article>
  );
}

export default AccordionList;