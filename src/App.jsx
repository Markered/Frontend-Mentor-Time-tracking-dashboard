import { useState, useEffect } from "react";
import Menu from "./components/menu.jsx";
import TaskCards from "./components/taskCards.jsx";

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
      <main className="dashboard">
        <Menu setTimeframes={setTimeframes}  timeframe={timeframes}/>
        {tasks && <TaskCards timeframe={timeframes} tasks={tasks} />}
      </main>
      <footer className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a target="blank" href="https://www.frontendmentor.io/profile/Markered">Markered</a>.
      </footer>
    </>
  );
}

export default App;
