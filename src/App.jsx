import { useState, useEffect } from "react";
import Menu from "./components/menu.jsx";
import TaskCards from "./components/taskCards.jsx";
import "./App.css";

function App() {
  const [timeframes, setTimeframes] = useState("daily");
  const [tasks, setTasks] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch('../data.json');
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        console.error("Failed to fetch tasks:", error);
      }
    };
    fetchTasks();
  }, []);

  return (
    <>
      <Menu setTimeframes={setTimeframes} />
      {tasks && <TaskCards timeframe={timeframes} task={tasks} />}
    </>
  );
}

export default App;
