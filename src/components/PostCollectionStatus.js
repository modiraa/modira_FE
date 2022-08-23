import React from "react";
import MainPostTItle from "./MainPostTItle";
import PostComponentStatus from "./PostComponentStatus";
import "../css(subin)/postcolloctionstatus.css";

const PostCollectionStatus = ({ titleCollection, postStatus }) => {
  const scrollRef = React.useRef(null);
  const [isDrag, setIsDrag] = React.useState(false);
  const [startX, setStartX] = React.useState();
  console.log(postStatus);

  const onDragStart = (e) => {
    e.preventDefault();
    setIsDrag(true);
    setStartX(e.pageX + scrollRef.current.scrollLeft);
  };

  const onDragEnd = () => {
    setIsDrag(false);
  };

  const onDragMove = (e) => {
    if (isDrag) {
      scrollRef.current.scrollLeft = startX - e.pageX;
    }
  };

  return (
    <div style={{ marginLeft: "24px" }}>
      <div style={{ width: "100%" }}>
        <div style={{ marginBottom: "21px" }}>
          <MainPostTItle titleCollection={titleCollection} />
        </div>

        <div
          className="postcollectionstatus-wrap-postcomponents"
          ref={scrollRef}
          onMouseDown={onDragStart}
          onMouseMove={onDragMove}
          onMouseUp={onDragEnd}
          onMouseLeave={onDragEnd}
        >
          {postStatus?.map((v, i) => (
            <div key={i} style={{ marginRight: "50px" }}>
              <PostComponentStatus poststatus={v}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostCollectionStatus;
