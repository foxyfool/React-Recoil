import "./App.css";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import {
  networkAtom,
  jobsAtom,
  notificationAtom,
  messagingAtom,
  TotalNotificationSelector,
} from "./atoms";

function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
}

function MainApp() {
  // useRecoilValue
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobsNotificationCount = useRecoilValue(jobsAtom);
  const notificationNotificationCount = useRecoilValue(notificationAtom);
  const [messageAtom, setMessagingAtomCount] = useRecoilState(messagingAtom);
  const totalNotificationCount = useRecoilValue(TotalNotificationSelector);

  const finalValue =
    networkNotificationCount >= 100 ? "99+" : networkNotificationCount;
  return (
    <>
      <button>Home</button>
      <button>My Network({finalValue})</button>
      <button>Jobs ({jobsNotificationCount})</button>
      <button>Messages({messageAtom})</button>
      <button>Notification({notificationNotificationCount})</button>

      <button>Me{totalNotificationCount}</button>
      <button
        onClick={() => {
          setMessagingAtomCount((c) => c + 1);
        }}
      >
        Add
      </button>
    </>
  );
}

export default App;
