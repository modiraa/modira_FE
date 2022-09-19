import '../css(subin)/MorePost.css';

import axios from 'axios';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import MorePostCard from '../components/morepost/MorePostCard';
import Navbar from '../components/public/Navbar';
import LowerNavbar from '../components/public/LowerNavbar';

let test=0;

const MorePost = () => {
console.log(test,"test확인")
  const location=useLocation();
  const [morePostTitle,setMorePostTitle] = useState('');
  const [morePostData,setMorePostData] = useState([]);
  const [lastId,setLastId] = useState();

  const category = location.state;
  const search = location.state.keyword;
  const address = location.state.address;
  console.log(category);
  console.log(search);
  console.log(address);

  const obsRef = useRef(null); //observer Element
  const preventRef = useRef(false); //옵저버 중복 실행 방지
  const [load, setLoad] = useState(false); //로딩 스피너

  // 옵저버 생성
  useEffect(() => {
    const observer = new IntersectionObserver(obsHandler, { threshold: 0.5 });
    if (obsRef.current) observer.observe(obsRef.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(()=>{
    if(category){
      loadMorePost();
    }
    if(search){
      loadSearchPost();
    }
    if(address){
      loadAddressPost();
    }
  },[lastId])

  useEffect(()=>{
  },[morePostData])

  const obsHandler = (entries) => {
    const target = entries[0];
    if (target.isIntersecting && preventRef.current) {
      preventRef.current = false;

        setLastId(test)
   
    }
  };

  const loadMorePost = useCallback(async () => {
    if (category == "최근생성모임") {
      setLoad(false)
      let firsturl=`http://3.34.129.164/api/post?category=${""}`
      let commonurl=`http://3.34.129.164/api/post?category=${""}&lastId=${lastId}`
      let urlAX=""
      if(lastId){
        urlAX=commonurl
      }else{
        urlAX= firsturl
      }
      await axios.get(urlAX)
        .then((res) => {
          test = res.data.content[res.data.content.length-1]?.postId;
          if(res.data){
            setMorePostTitle("최근생성모임")
            setMorePostData(prev=>{
              return [...prev, ...res.data.content]
            })
            preventRef.current = true;
          }
          if(res.data.content<8) {
            setMorePostTitle("최근생성모임")
            setMorePostData(prev => {
              return [...prev, ...res.data.content]
            })
            preventRef.current = false;
          }
        })
        .catch((err) => {
          console.log(err);
        })
    }

    else if(category == "골든벨"){
      let firsturl=`http://3.34.129.164/api/post?&category=${category}`
      let commonurl=`http://3.34.129.164/api/post?&category=${category}&lastId=${lastId}`
      let urlAX=""
      if(lastId){
        urlAX=commonurl
      }else{
        urlAX= firsturl
      }
      await axios.get(urlAX)
        .then((res) => {
          test=res.data.content[7]?.postId;
          if(res.data){
            setMorePostTitle("방장이 쏜다! 골든벨")
            setMorePostData(prev=>{
              return [...prev, ...res.data.content]
            })
            preventRef.current = true;
          }else{
          }
        })
        .catch((err) => {
        })
    }

    else if(category == "n빵"){
      setLoad(true)
      let firsturl=`http://3.34.129.164/api/post?&category=${category}`
      let commonurl=`http://3.34.129.164/api/post?&category=${category}&lastId=${lastId}`
      let urlAX=""
      if(lastId){
        urlAX=commonurl
      }else{
        urlAX= firsturl
      }
      await axios.get(urlAX)
        .then((res) => {
          test=res.data.content[7]?.postId;
          if(res.data){
            setMorePostTitle("다같이 내자! N빵")
            setMorePostData(prev=>{
              return [...prev, ...res.data.content]
            })
            preventRef.current = true;
          }else{
          }
        })
        .catch((err) => {
        })
    }
  },[lastId])

  const loadSearchPost = useCallback(async () => {
    let firsturl = `http://3.34.129.164/api/search/post?keyword=${search}`
    let commonurl = `http://3.34.129.164/api/search/post?keyword=${search}&lastId=${lastId}`
    let urlAX = ""
    if (lastId) {
      urlAX = commonurl
    } else {
      urlAX = firsturl
    }
    console.log(urlAX)
    await axios.get(urlAX)
      .then((res) => {
        test = res.data.content[res.data.content.length-1]?.postId;
        if (res.data) {
          setMorePostTitle('검색어' + ' : ' + search)
          setMorePostData(prev => {
            return [...prev, ...res.data.content]
          })
          preventRef.current = true;
        }
        if(res.data.content<8) {
          setMorePostTitle('검색어' + ' : ' + search)
          setMorePostData(prev => {
            return [...prev, ...res.data.content]
          })
          preventRef.current = false;
        }
      })
      .catch((err) => {
      })
  }, [lastId])

  const loadAddressPost = useCallback(async () => {
    let firsturl = `http://3.34.129.164/api/search/post?address=${address}`
    let commonurl = `http://3.34.129.164/api/search/post?address=${address}&lastId=${lastId}`
    let urlAX = ""
    if (lastId) {
      urlAX = commonurl
    } else {
      urlAX = firsturl
    }
    await axios.get(urlAX)
      .then((res) => {
        test = res.data.content[res.data.content.length-1]?.postId;
        if (res.data) {
          setMorePostTitle('검색어' + ' : ' + address)
          setMorePostData(prev => {
            return [...prev, ...res.data.content]
          })
          preventRef.current = true;
        }
        if(res.data.content<8) {
          setMorePostTitle('검색어' + ' : ' + search)
          setMorePostData(prev => {
            return [...prev, ...res.data.content]
          })
          preventRef.current = false;
        }
      })
      .catch((err) => {
      })
  }, [lastId])

  return (
    <div className="more-post">
      <Navbar address={address} />
      <div className='more-post-top-line' />
      <div className="more-post-title">
        <h3>{morePostTitle}</h3>
      </div>
      <div className="more-post-Contents">
        {morePostData && morePostData.map((item, index) => {
          return (
            <MorePostCard item={item} key={index} />
          )
        })}
        {/* {morePostData!=[]&&<div ref={obsRef}>안녕</div>} */}


        {/* <div className='hide-obs'></div> */}
        <div ref={obsRef} />

      </div>
      <div className="subsitute-lowernavar"></div>
      <div className="lowernavbar">
       <LowerNavbar/>
      </div>

    </div>
    
  )
}

export default MorePost;