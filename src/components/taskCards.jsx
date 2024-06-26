const TaskCards = ({ timeframe, tasks }) => {
  const taskBgColors = {
    work: "hsl(15, 100%, 70%)",
    play: "hsl(195, 74%, 62%)",
    study: "hsl(348, 100%, 68%)",
    exercise: "hsl(145, 58%, 55%)",
    social: "hsl(264, 64%, 52%)",
    "self-care": "hsl(43, 84%, 65%)"
  }

  return (
    <>
      {tasks.map((task, index) => {
        const normalizedTaskName = task.title
          .replace(/\s+/g, "-")
          .toLowerCase();
        return (
          <article
            key={index + 1}
            className={`task-card`}
            style={{ backgroundColor: taskBgColors[normalizedTaskName] }}
          >
            <img
              className="task-icon"
              src={`../../images/icon-${task.title.replace(/\s+/g, "-")}.svg`}
              alt=""
            />
            <div className="task-info">
              <header className="task-header">
                <h2 className="task-title">{task.title}</h2>
                <button>
                  <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
                      fill="currentColor"
                      fillRule="evenodd"
                    />
                  </svg>
                </button>
              </header>
              <span className="time">
                {task.timeframes[timeframe].current}hrs
                <p className="previous-time">
                  {timeframe == "daily"
                    ? "Yesterday"
                    : timeframe == "weekly"
                    ? "Last Week"
                    : timeframe == "monthly"
                    ? "Last Month"
                    : ""}{" "}
                  - {task.timeframes[timeframe].previous}hrs
                </p>
              </span>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default TaskCards;
