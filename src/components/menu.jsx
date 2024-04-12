import "./menu.css"

const Menu = ({ setTimeframes }) => {
  return (
    <article>
      <div>
        <img src="" alt="" />
        
        <h1 className="profile-name">
          <span>Report for</span> Jeremy Robson
        </h1>
      </div>

      <button className="timeframe-toggle" onClick={() => setTimeframes("daily")}>Daily</button>
      <button className="timeframe-toggle" onClick={() => setTimeframes("weekly")}>Weekly</button>
      <button className="timeframe-toggle" onClick={() => setTimeframes("monthly")}>Monthly</button>
    </article>
  );
}

export default Menu;