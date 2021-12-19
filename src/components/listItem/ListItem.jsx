import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
import "./listItem.scss";

const ListItem = () => {
  return (
    <div className="listItem">
      <img src="" alt="movie thumbnail" />
      <div className="itemInfo">
        <div className="icons">
          <PlayArrow />
          <Add />
          <ThumbUpAltOutlined />
          <ThumbDownAltOutlined />
        </div>
        <div className="itemInfoTop"></div>
      </div>
    </div>
  );
};

export default ListItem;
