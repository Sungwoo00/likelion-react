import { create } from 'zustand';
import { combine } from 'zustand/middleware';

// 초기 상태
const initialState = {
  count: 1,
  step: 1,
  min: 1,
  max: 100,
};

// 파생된 상태


export const useCountStore = create(
  // 병합(combine) 미들웨어
  // 상태 + 스토어 생성 함수(액션만 포함)

  // 상태가 변경되면 컴포넌트가 리-렌더링 된다. (!)
  // 상태 업데이트 함수가 실행되면 컴포넌트가 리-렌더링 된다. (?)
  combine(
    { 
      ...initialState 
    }, 
    (set) => ({
      increment: () => set(({ count, step, max }) => {
        const nextCount = count + step;
        return {
          count: nextCount > max ? max : nextCount,
        }
      }),
      decrement: () => set(({ count, step, min }) => {
        const nextCount = count - step;
        return {
          count: nextCount < min ? min : nextCount,
        }
      }),
      reset: () => set(initialState),
    }))
);