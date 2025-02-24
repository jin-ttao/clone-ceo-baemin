import { useEffect, useState } from "react";
import { setWelcomeToastConfig } from "./welcomeToast";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setWelcomeToastConfig();
  }, []);

  return (
    <main className="flex flex-col items-center justify-center h-screen overflow-hidden gap-2 relative">
      <div className="relative">
        <h1 className="font-bold text-4xl text-center" id="title">🍃 우리 브랜드를 언급한<br/>네이버 블로그 게시물을 한 곳에</h1>
        <div className="absolute -top-50 -left-30">
          <span className="text-base hover:cursor-pointer text-gray-400 rounded p-2" id="question-button">🤔 궁금한게 있어요</span>
        </div>
      </div>
      <h2 className="mt-4 text-xl text-center" id="subtitle">사용자들은 우리 브랜드를 어떻게 생각하고 있을까?<br/>실제 사용자들의 이야기와 후기를 모아 보세요.</h2>
      <div className="buttons mt-8 space-x-4 text-center">
        <button className="text-black px-4 py-2 rounded-md border border-black hover:cursor-pointer" id="login-button">지금 확인하기</button>
        <button className="bg-black text-white px-4 py-2 rounded-md hover:cursor-pointer" id="sample-button">샘플 구경하기</button>
      </div>
      <div className="mt-10 flex flex-col items-center text-center gap-2" id="footer">
        <span className="text-sm text-gray-500">❕ 목업 웹사이트로, 버튼은 동작하지 않아요</span>
        <span className="text-sm text-gray-500">네이버 블로그 모니터링 서비스
          <br/>
          <a target="_blank" href="https://bloblow.netlify.app/" className="text-green-600 underline hover:cursor-pointer">@블로블로(Bloblow)</a>
          {" "}에서 확인할 수 있어요
        </span>
      </div>
    </main>
    );
}

export default App;
