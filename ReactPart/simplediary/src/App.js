import { useRef, useState } from "react";
import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

/* const dummyList = [
  {
    id: 1,
    author: "조성찬",
    content: "하이 1",
    emotion: 1,
    created_date: new Date().getTime(),
  },
  {
    id: 2,
    author: "김진우",
    content: "하이 2",
    emotion: 3,
    created_date: new Date().getTime(),
  },
  {
    id: 3,
    author: "김도현",
    content: "하이 3",
    emotion: 4,
    created_date: new Date().getTime(),
  },
  {
    id: 4,
    author: "현지수",
    content: "하이 4",
    emotion: 2,
    created_date: new Date().getTime(),
  },
  {
    id: 5,
    author: "채하은",
    content: "하이 5",
    emotion: 5,
    created_date: new Date().getTime(),
  },
];
 */
const App = () => {
  const [data, setData] = useState([]);

  const dataId = useRef(0);

  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current,
    };
    dataId.current += 1;
    setData([newItem, ...data]);
  };

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <DiaryList diaryList={data} />
    </div>
  );
};

export default App;
