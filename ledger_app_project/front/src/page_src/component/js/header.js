import header_style from "../scss/header.scss";

function Header() {
    return (
      <div className="App">
        <header>
          <div className="header_main_tag">
            Main
          </div>
          <div className="header_image_tag">
            Graph
          </div>
          <div className="header_ranking_tag">
            Ranking
          </div>
        </header>
      </div>
    );
  }
  
  export default Header;