const TaskCards = ({ timeframe, task }) => {
  return (
    <ul>
      {task.map((task, index) => {
        return (
          <li  key={index + 1}>
            <article>
              <img src={`../../images/icon-${task.title.replace(/\s+/g, '-')}.svg`} alt="" />
              <div>
                <p>{task.title}</p>
                <h2 className="task-">
                  {task.timeframes[timeframe].current}hrs
                  <span>
                    {timeframe == "daily"
                      ? "Yesterday"
                      : timeframe == "weekly"
                      ? "Last Week"
                      : timeframe == "monthly"
                      ? "Last Month"
                      : ""}
                    - {task.timeframes[timeframe].previous}hrs
                  </span>
                </h2>
              </div>
            </article>
          </li>
        );
      })}
    </ul>
  );
};

export default TaskCards;
