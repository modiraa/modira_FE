import React from "react";
import MainPostTItle from "../components/MainPostTItle";
import PostComponent from "./PostComponent";
import "../css(subin)/PostCollection.css";
import ScrollContainer from "react-indiana-drag-scroll";
import ReactDOM from "react-dom";

const PostCollection = ({ postAll }) => {




  if (postAll) {
    return (
      <div style={{ width: "100%" }}>
        <div style={{ marginBottom: "20px" }}>
          <MainPostTItle titleCollection={"최근생성모임"} />
        </div>
        <ScrollContainer className="scroll-container" horizontal={true} >
          <div className="postcollection-wrap-postcomponents">
            <div style={{ marginRight: "27px" }}>
              <PostComponent postAll={postAll[0]}  />
              <PostComponent postAll={postAll[1]}  />
            </div>
            <div style={{ marginRight: "27px" }}>
              <PostComponent postAll={postAll[2]} />
              <PostComponent postAll={postAll[3]}  />
            </div>
            <div style={{ marginRight: "27px" }}>
              <PostComponent postAll={postAll[4]} />
              <PostComponent postAll={postAll[5]}  />
            </div>
            <div style={{ marginRight: "27px" }}>
              <PostComponent postAll={postAll[6]}  />
              <PostComponent postAll={postAll[7]}  />
            </div>
          </div>
        </ScrollContainer>
      </div>
    );
  } else {
    return null;
  }
};

export default PostCollection;
