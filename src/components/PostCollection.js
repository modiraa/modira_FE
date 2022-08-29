import React from "react";
import MainPostTItle from "../components/MainPostTItle";
import PostComponent from "./PostComponent";
import"../css(subin)/PostCollection.css"

const PostCollection = ({postAll}) => {
  const scrollRef = React.useRef(null);
  const [isDrag, setIsDrag] = React.useState(false);
  const [startX, setStartX] = React.useState();
  
  // console.log(postAll)

  const onDragStart = (e) => {
    e.preventDefault();
    setIsDrag(()=>true);
    setStartX(e.pageX + scrollRef.current.scrollLeft);
  };

  const onDragEnd = (e) => {
    e.preventDefault();
  
    setIsDrag(()=>false);
  };

  const onDragMove = (e) => {
    if (isDrag) {
      scrollRef.current.scrollLeft = startX - e.pageX;
    }
  };
if(postAll){
  return (
    <div style={{ width: "100%" }}>
      <div style={{ marginBottom: "20px" }}>
        <MainPostTItle titleCollection={"최근생성모임"} morepostType={"최근생성모임"}/>
      </div>

      <div className="postcollection-wrap-postcomponents"
       
        ref={scrollRef}
        onMouseDown={onDragStart}
        onMouseMove={isDrag?onDragMove:null}
        onMouseUp={onDragEnd}
        onMouseLeave={onDragEnd}
      >
        <div style={{ marginRight: "27px" }}>
          <PostComponent postAll={postAll[0]} isDrag={isDrag}/>
          <PostComponent  postAll={postAll[1]} isDrag={isDrag}/>
        </div>
        <div style={{ marginRight: "27px" }}>
          <PostComponent  postAll={postAll[2]} isDrag={isDrag}/>
          <PostComponent postAll={postAll[3]} isDrag={isDrag}/>
        </div>
        <div style={{ marginRight: "27px" }}>
          <PostComponent  postAll={postAll[4]} isDrag={isDrag}/>
          <PostComponent  postAll={postAll[5]} isDrag={isDrag}/>
        </div>
        <div style={{ marginRight: "27px" }}>
          <PostComponent  postAll={postAll[6]} isDrag={isDrag}/>
          <PostComponent  postAll={postAll[7]} isDrag={isDrag}/>
        </div>
      </div>
    </div>
  );
}else{
  return null;
}
 
};

export default PostCollection;
