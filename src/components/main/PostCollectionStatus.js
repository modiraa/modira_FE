import React from "react";
import ScrollContainer from "react-indiana-drag-scroll";
//css
import "./postcolloctionstatus.css";
//conponent
import PostSeeMorePostStatus from "./PostSeeMorePostStatus";
import PostNoComponentStatus from "./PostNoComponentStatus";
import MainPostTItle from "./MainPostTItle";
import PostComponentStatus from "./PostComponentStatus";


const PostCollectionStatus = ({
  titleCollection,
  postStatus,
  morepostType,
}) => {
  return (
    <div className="wrap-postcollectionstatus">
      <div style={{ width: "100%" }}>
        <div style={{ marginBottom: "26px" }}>
          <MainPostTItle
            titleCollection={titleCollection}
            morepostType={morepostType}
          />
        </div>
        <ScrollContainer className="scroll-container" horizontal={true}>
          <div className="postcollectionstatus-wrap-postcomponents">
            {postStatus?.map((v, i) => (
              <div key={i} style={{ marginRight: "20px" }}>
                <PostComponentStatus poststatus={v} />
              </div>
            ))}
            <div>
              {postStatus?.length > 8 && (
                <PostSeeMorePostStatus morepostType={morepostType} />
              )}
              {postStatus?.length == 0 && (
                <div className="postcollectionstatus-wrap-postnocomponent">
                  <PostNoComponentStatus />
                  <PostNoComponentStatus />
                </div>
              )}
            </div>
          </div>
        </ScrollContainer>
      </div>
    </div>
  );
};

export default PostCollectionStatus;
