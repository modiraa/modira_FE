import React from "react";
import MainPostTItle from "../components/MainPostTItle";
import PostComponent from "./PostComponent";
import "../css(subin)/PostCollection.css";
import ScrollContainer from "react-indiana-drag-scroll";
import ReactDOM from "react-dom";
import PostSeeMorePost from "./PostSeeMorePost";

const PostCollection = ({ postAll, }) => {




  if (postAll) {
    return (
      <div style={{ width: "100%" }}>
        <div style={{ marginBottom: "28px" }}>
          <MainPostTItle titleCollection={"최근생성모임"} morepostType={"최근생성모임"}/>
        </div>
        <ScrollContainer className="scroll-container" horizontal={true} >
          <div className="postcollection-wrap-postcomponents">
          {postAll.map((v,i)=>{return <PostComponent key={i} postAll={v}/>})}
    
        
             <PostSeeMorePost  className="item" width={"261px"} height={"221px"}/>
           
          </div>
        </ScrollContainer>
      </div>
    );
  } else {
    return null;
  }
};

export default PostCollection;
