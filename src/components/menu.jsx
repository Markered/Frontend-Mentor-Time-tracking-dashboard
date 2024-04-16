import "./styles/menu.css";

const Menu = ({ setTimeframes, timeframe }) => {
  return (
    <header className="menu">
      <figure className="profile-card">
        <img src="../../images/image-jeremy.png" alt="profile-picture" />
        <figcaption>
          <h1 className="profile-name">
            <span>Report for</span>
            Jeremy Robson
          </h1>
        </figcaption>
      </figure>

      <nav aria-label="toggle-timeframe">
        <ul>
          <button
            className={`timeframe-toggle ${timeframe === 'daily' ? 'active' : ''}`}
            onClick={() => {
              setTimeframes("daily");
            }}
          >
            Daily
          </button>
          <button
            className={`timeframe-toggle ${timeframe === 'weekly' ? 'active' : ''}`}
            onClick={() => {
              setTimeframes("weekly");
            }}
          >
            Weekly
          </button>
          <button
            className={`timeframe-toggle ${timeframe === 'monthly' ? 'active' : ''} `}
            onClick={() => {
              setTimeframes("monthly");
            }}
          >
            Monthly
          </button>
        </ul>
      </nav>
    </header>
  );
};

export default Menu;
