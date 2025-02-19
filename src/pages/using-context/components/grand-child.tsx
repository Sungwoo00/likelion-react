import { useState } from 'react';

function GrandChild() {
  const [message, setMessage] = useState('안녕! Grand Parent');

  return (
    <div className="flex-1 flex flex-col gap-3 p-5 border-4 rounded-full justify-center text-center">
      {message}
      <button
        type="button"
        className="bg-react text-white p-2 text-sm rounded-full"
        onClick={() => {
          setMessage('반갑습니다. Mr. 페이지!');
        }}
      >
        Page 컴포넌트에게 인사하기
      </button>
    </div>
  );
}

export default GrandChild;