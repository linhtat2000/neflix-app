import "./home.scss";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";

const Home = () => {
  return (
    <div className="home">
      <Featured type="series" />
      <List />
    </div>
  );
};

export default Home;
