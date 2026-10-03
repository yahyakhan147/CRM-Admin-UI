import Topbar from "../components/Topbar";
import TaskList from "../components/TaskList";
import { tasks } from "../data/mockData";
import Footer from "../components/Footer";

export default function Chat({ onMenuClick }) {
  return (
    <>
      <Topbar
        title="Chat"
        subtitle={`${tasks.filter((t) => !t.done).length} open tasks.`}
        actionLabel="New Task"
        onMenuClick={onMenuClick}
      />
      <TaskList tasks={tasks} />
      <Footer />
    </>
  );
}
