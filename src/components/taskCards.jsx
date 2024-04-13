import "./taskCards.css";
const TaskCards = ({ timeframe, tasks }) => {
  return (
    <>
      {tasks.map((task, index) => {
        const normalizedTaskName = task.title
          .replace(/\s+/g, "-")
          .toLowerCase();
        return (
          <article
            key={index + 1}
            className="task-card"
            style={{ backgroundColor: `var(--${normalizedTaskName}` }}
          >
            <img
              className="task-icon"
              src={`../../images/icon-${task.title.replace(/\s+/g, "-")}.svg`}
              alt=""
            />
            <div className="task-info">
              <header className="task-header">
                <h2 className="task-title">{task.title}</h2>
                <img src="../../images/icon-ellipsis.svg" alt="more-icon" />
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
