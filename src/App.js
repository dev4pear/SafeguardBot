import axios from "axios";
import "./App.css";
import Confirm from "./components/ConfirmDialog";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [twitter, setTwitter] = useState("");
  const [user, setUser] = useState();

  const searchParams = new URLSearchParams(window.location.search);
  const message_id = searchParams.get("message_id");
  const chat_id = searchParams.get("chat_id");

  useEffect(() => {
    const search = window.Telegram.WebApp.initData;
    var converted = JSON.parse(
      '{"' + search.replace(/&/g, '","').replace(/=/g, '":"') + '"}',
      function (key, value) {
        return key === "" ? value : decodeURIComponent(value);
      }
    );
    setUser(JSON.parse(converted.user));
    // const userData = {
    //   id: 7179656202,
    //   first_name: "TJ",
    //   last_name: "",
    //   username: "tj0xdev",
    //   language_code: "en",
    //   allows_write_to_pm: true,
    // };
    // setUser(userData);
  }, []);

  const onVerify = async () => {
    if (twitter === "") {
      toast.error("You must input your twitter username to proceed!", {
        duration: 3000,
      });
      return;
    }
    setConfirmOpen(true);
  };

  const handleVerify = async () => {
    axios
      .post("http://localhost:5000/api/verify", {
        user,
        twitter,
        chat_id,
        message_id,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        const res = error.response;
        toast.error(res.data.message, { duration: 3000 });
      });
  };

  return (
    <div className="App flex flex-col gap-4 self-center items-center">
      <Toaster />
      <Confirm
        title="Want to proceed?"
        open={confirmOpen}
        onClose={() => setConfirmOpen(false)}
        onConfirm={() => handleVerify()}
      >
        Are you sure you want to join LandWu with this info?
        <div>Twitter: {twitter}</div>
        <div>Telegram: {user?.username}</div>
      </Confirm>
      <div className="pt-4 text-3xl font-bold">Human Verification</div>
      <div class="relative">
        <input
          type="text"
          value={twitter}
          onChange={(ev) => setTwitter(ev.target.value)}
          class="w-full px-4 py-2 text-gray-700 bg-white border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
          placeholder="Your Twitter Username"
        />
        <span class="absolute inset-y-0 right-0 flex items-center pr-3">
          <svg
            class="w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </span>
      </div>
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
