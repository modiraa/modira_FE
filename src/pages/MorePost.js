import axios from 'axios';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import MorePostCard from '../components/MorePostCard';
import Navbar from '../components/Navbar';
import '../css(subin)/MorePost.css';

let test=0;

const MorePost = () => {
console.log(test,"test확인")
  const location=useLocation();
  const [morePostTitle,setMorePostTitle] = useState('');
  const [morePostData,setMorePostData] = useState([]);
  const [lastId,setLastId] = useState();



  const category = location.state;
  // console.log(category);

  const obsRef = useRef(null); //observer Element
  const preventRef = useRef(true); //옵저버 중복 실행 방지
  const [load, setLoad] = useState(false); //로딩 스피너

  // console.log(obsRef.current)

  // mainposttitle.js console.확인하시면 됩니다.!!!! uselocation으로 콘솔확인하세요!

  // 옵저버 생성
  useEffect(() => {
    const observer = new IntersectionObserver(obsHandler, { threshold: 0.5 });
    if (obsRef.current) observer.observe(obsRef.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(()=>{
    loadMorePost();
    console.log("두번찍히나?")
  },[,lastId])


  useEffect(()=>{
    console.log(morePostData)
  },[morePostData])

  const obsHandler = (entries) => {
    const target = entries[0];
    if (target.isIntersecting && preventRef.current) {
      preventRef.current = false;
  
     
      console.log("옵저버발션",test)
        setLastId(test)
   
    }
  };
  // console.log(lastId)

  const loadMorePost = useCallback(async () => {
    if (category == "최근생성모임") {
      // console.log('최근생성모임 불러오기')
      setLoad(true)
      let firsturl="http://3.34.129.164/api/post"
      let commonurl=`http://3.34.129.164/api/post?lastId=${lastId}`
      let urlAX=""
      if(lastId){
        urlAX=commonurl
        console.log(lastId)
      }else{
        urlAX= firsturl
        console.log(lastId)
      }
      console.log(urlAX)
      await axios.get(urlAX)
        .then((res) => {
          console.log(res.data.content[7].postId);
          test=res.data.content[7].postId;
          if(res.data){
            // console.log(res.data);
            setMorePostTitle("최근생성모임")
            // console.log(setMorePostTitle)
            setMorePostData(prev=>{
              // console.log(prev);
              return [...prev, ...res.data.content]
            })
            preventRef.current = true;
          }else{
            // console.log(res);
          }
        })
        .catch((err) => {
          console.log(err);
        })
    }

    // else{
    //   console.log(`category=${category}`)
    //   await axios.get(`http://3.34.129.164/api/post?category=${category}&lastId=${lastId}`)
    //     .then((res) => {
    //       console.log(res.data.content);
    //       if(category == "골든벨"){
    //         setMorePostTitle("내가 쏜다! 골든벨")
    //         setMorePostData({list:[...res.data.content]})
    //       }
    //       else if(category == "n빵"){
    //         setMorePostTitle("무조건 N빵 모임")
    //         setMorePostData({list:[...res.data.content]})
    //       }
    //       setLastId(10);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     })
    // }
  },[lastId])


  return (
    <div className="more-post">
      <Navbar/>
      <div className='more-post-top-line'/>
      <div className="more-post-title">
        <h3>{morePostTitle}</h3>
      </div>
      <div className="more-post-Contents">
        {morePostData && morePostData.map((item,index)=>{
          return(
            <MorePostCard item={item} key={index}/>
          )
        })
      
     
      }
      {morePostData!=[]&&   <div ref={obsRef}>
          안녕
        </div>}
     
      </div>
    </div>
    
  )
}
export default MorePost