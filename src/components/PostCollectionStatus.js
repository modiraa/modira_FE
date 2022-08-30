import React from "react";
import MainPostTItle from "./MainPostTItle";
import PostComponentStatus from "./PostComponentStatus";
import "../css(subin)/postcolloctionstatus.css";
import ScrollContainer from "react-indiana-drag-scroll";

const PostCollectionStatus = ({
  titleCollection,
  postStatus,
  morepostType,
}) => {
  return (
    <div style={{ marginLeft: "24px" }}>
      <div style={{ width: "100%" }}>
        <div style={{ marginBottom: "21px" }}>
          <MainPostTItle
            titleCollection={titleCollection}
            morepostType={morepostType}
          />
        </div>
        <ScrollContainer className="scroll-container" horizontal={true}>
          <div className="postcollectionstatus-wrap-postcomponents">
            {postStatus?.map((v, i) => (
              <div key={i} style={{ marginRight: "50px" }}>
                <PostComponentStatus poststatus={v} />
              </div>
            ))}
          </div>
        </ScrollContainer>
      </div>
    </div>
  );
};

export default PostCollectionStatus;
