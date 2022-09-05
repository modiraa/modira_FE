import React from "react";
import MainPostTItle from "../components/MainPostTItle";
import PostComponent from "./PostComponent";
import "../css(subin)/PostCollection.css";
import ScrollContainer from "react-indiana-drag-scroll";
import ReactDOM from "react-dom";
import PostSeeMorePost from "./PostSeeMorePost";

const PostCollection = ({ postAll, }) => {




    return (
      <div className="wrap-postcollection">
        <div className="postcollection-mainposttitle">
          <MainPostTItle titleCollection={"최근생성모임"} morepostType={"최근생성모임"}/>
        </div>
        <ScrollContainer className="scroll-container" horizontal={true} >
          <div className="postcollection-wrap-postcomponents">
          {postAll?.map((v,i)=>{return <PostComponent key={i} postAll={v}/>})}
             <PostSeeMorePost  className="item" width={"261px"} height={"221px"} morepostType={"최근생성모임"}/>
          </div>
        </ScrollContainer>
      </div>
    );

};

export default PostCollection;
