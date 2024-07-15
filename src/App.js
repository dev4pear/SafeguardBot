import logo from "./logo.svg";
import "./App.css";

function App() {
  const onVerify = () => {
    // window.close();
    window.Telegram.WebApp.close();
  };
  return (
    <div className="App flex flex-col gap-4 self-center items-center">
      <div className="pt-4 text-3xl font-bold">Human Verification</div>
      <div className="font-bold">Verify below to be granted entry</div>
      <div
        onClick={() => onVerify()}
        className="w-[240px] bg-green-700 text-white py-3 rounded-md"
      >
        Click here
      </div>
    </div>
  );
}

export default App;
