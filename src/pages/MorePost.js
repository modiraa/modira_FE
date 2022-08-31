import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import MorePostCard from '../components/MorePostCard';
import Navbar from '../components/Navbar';
import '../css(subin)/MorePost.css';
import Loader from "../components/Loader";

const MorePost = () => {

  const location=useLocation();
  console.log(location.state)

  const [lastId,setLastId] = useState(6);
  
  const [morePostTitle,setMorePostTitle] = useState('');

  const [morePostData,setMorePostData] = useState({
    list:[]
  });

  const category = location.state;

  // mainposttitle.js console.확인하시면 됩니다.!!!! uselocation으로 콘솔확인하세요!

  const loadMorePost = async () => {
    if (category == "최근생성모임") {
      await axios.get(`http://3.34.129.164/api/post?lastId=${lastId}`)
        .then((res) => {
          console.log(res.data.content);
          setMorePostTitle("최근생성모임")
          setMorePostData({ list: [...res.data.content] })
          setLastId(8);
        })
    }

    else {
      console.log(`category=${category}`)
      await axios.get(`http://3.34.129.164/api/post?category=${category}&lastId=${lastId}`)
        .then((res) => {
          console.log(res.data.content);
          if (category == "골든벨") {
            setMorePostTitle("내가 쏜다! 골든벨")
            setMorePostData({ list: [...res.data.content] })
          }
          else if (category == "n빵") {
            setMorePostTitle("무조건 N빵 모임")
            setMorePostData({ list: [...res.data.content] })
          }
          setLastId(10);
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }


  useEffect(() => {
    loadMorePost();
  }, [])

  return (
    <div className="more-post">
      <Navbar/>
      <div className='more-post-top-line'/>
      <div className="more-post-title">
        <h3>{morePostTitle}</h3>
      </div>
      <div className="more-post-Contents">
        {morePostData.list.map((item, index) => {
          return (
            <MorePostCard item={item} key={index} />
          )
        })}
      </div>
    </div>
    
  )
}
export default MorePost