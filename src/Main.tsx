import { Link } from "react-router-dom";
import "./style.css";

const Main: React.FC = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <img className="phoneImage" alt="iPhone_01" src="img/Raccon.png" />
        <div className="jumbotron snowfall">
          <h2 className="h2custom">
            🍺 <span className="boldOnHover">술과 함께 🥂</span>
          </h2>
          <p className="pcustom">
            <strong>😊 당신의 술자리를 더욱 즐겁게 만들어 줍니다 ❗</strong>
          </p>
          <Link to="/Second">
            <button className="btncustom">시작하기</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
