import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
import { useState } from "react";
import "./listItem.scss";

const ListItem = ({ index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const trailer = "";

  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src="" alt="movie thumbnail" />
      {isHovered && (
        <>
          <video src={trailer} autoPlay={true} loop />
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownAltOutlined className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>1 hour 15 mins</span>
              <span className="limit">+15</span>
              <span>1999</span>
            </div>
            <div className="desc">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. A
              ducimus tempora praesentium ipsam iste?
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  );
};

export default ListItem;
