import Topbar from "../components/Topbar";
import { tasks } from "../data/mockData";
import Footer from "../components/Footer";
import Conversation from "../components/Coversation";

export default function Chat({ onMenuClick }) {
  return (
    <>
      <Topbar
        title="Chat"
        subtitle={`${tasks.filter((t) => !t.done).length} open tasks.`}
        actionLabel="New Task"
        onMenuClick={onMenuClick}
      />
      <Conversation />
      <Footer />
    </>
  );
}
