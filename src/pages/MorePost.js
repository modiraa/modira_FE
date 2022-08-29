import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MorePostCard from '../components/MorePostCard';
import Navbar from '../components/Navbar';
import '../css(subin)/MorePost.css';

const MorePost = () => {

  const [morePostTitle,setMorePostTitle] = useState(null);
  const [morePostData,setMorePostData] = useState('');
  const [lastId,setLastId] = useState('');

  const category = '골든벨';

  const loadMorePost = async() => {
    await axios.get(`http://3.34.129.164/api/post?category=${category}&lastId=${lastId}`)
    .then((res)=>{
      console.log(res);
      setLastId(5);
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  useEffect(()=>{
    loadMorePost();
  },[])

  return (
    <div className="more-post">
      <Navbar/>
      <div className='more-post-top-line'/>
      <div className="more-post-title">
        <h3>최근생성 모임</h3>
      </div>
      <div className="more-post-Contents">
        <MorePostCard/>
        <MorePostCard/>
        <MorePostCard/>
        <MorePostCard/>
        <MorePostCard/>
      </div>
    </div>
    
  )
}
export default MorePost