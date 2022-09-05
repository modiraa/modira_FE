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
  const search = location.state.keyword;
  const address = location.state.address;
  console.log(category);
  console.log(search);
  console.log(address);

  const obsRef = useRef(null); //observer Element
  const preventRef = useRef(false); //옵저버 중복 실행 방지
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
  },[lastId])

  useEffect(()=>{
    loadSearchPost();
    console.log("두번찍히나?")
  },[lastId])

  useEffect(()=>{
    loadAddressPost();
    console.log("두번찍히나?")
  },[lastId])


  useEffect(()=>{
    console.log(morePostData)
  },[morePostData])

  const obsHandler = (entries) => {
    const target = entries[0];
    console.log(entries);
    if (target.isIntersecting && preventRef.current) {
      preventRef.current = false;

      console.log("옵저버발견",test)
        setLastId(test)
   
    }
  };
  // console.log(lastId)

  // await axios
  //     .get(`http://3.34.129.164/api/search/post?keyword=${test}`)
  //     .then((response) => {
  //       console.log("성공", response);
  //     })
  //     .catch((error) => {
  //       console.log("에러", error);
  //     });

  const loadMorePost = useCallback(async () => {
    console.log('나와라')
    if (category == "최근생성모임") {
      // console.log('최근생성모임 불러오기')
      setLoad(false)
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

    else if(category == "골든벨"){
      console.log('나와라 골든벨')
      console.log(`category=${category}`)
      let firsturl=`http://3.34.129.164/api/post?&category=${category}`
      let commonurl=`http://3.34.129.164/api/post?&category=${category}&lastId=${lastId}`
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
          console.log(res.data.content[7]?.postId);
          test=res.data.content[7]?.postId;
          if(res.data){
            // console.log(res.data);
            setMorePostTitle("방장이 쏜다! 골든벨")
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

    else if(category == "n빵"){
      console.log('나와라 n빵')
      console.log(`category=${category}`)
      setLoad(true)
      let firsturl=`http://3.34.129.164/api/post?&category=${category}`
      let commonurl=`http://3.34.129.164/api/post?&category=${category}&lastId=${lastId}`
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
            setMorePostTitle("다같이 내자! N빵")
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

    else if(category == {}){
      console.log('나와라 검색')
      let firsturl="http://3.34.129.164/api/search/post"
      let commonurl=`http://3.34.129.164/api/search/post?keyword=${search}&address={address}&lastId=${lastId}`
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
            setMorePostTitle("내가 쏜다! 골든벨")
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
  },[lastId])

  const loadSearchPost = useCallback(async () => {
    console.log('나와라 검색')
    let firsturl = `http://3.34.129.164/api/search/post?keyword=${search}`
    let commonurl = `http://3.34.129.164/api/search/post?keyword=${search}&lastId=${lastId}`
    let urlAX = ""
    if (lastId) {
      urlAX = commonurl
      console.log(lastId)
    } else {
      urlAX = firsturl
      console.log(lastId)
    }
    console.log(urlAX)
    await axios.get(urlAX)
      .then((res) => {
        console.log(res.data.content[res.data.content.length-1]?.postId);
        test = res.data.content[res.data.content.length-1]?.postId;
        if (res.data) {
          // console.log(res.data);
          setMorePostTitle('검색어' + ' : ' + search)
          // console.log(setMorePostTitle)
          setMorePostData(prev => {
            // console.log(prev);
            return [...prev, ...res.data.content]
          })
          preventRef.current = true;
        }
        if(res.data.content<8) {
          // console.log(res.data);
          setMorePostTitle('검색어' + ' : ' + search)
          // console.log(setMorePostTitle)
          setMorePostData(prev => {
            // console.log(prev);
            return [...prev, ...res.data.content]
          })
          preventRef.current = false;
        }
      })
      .catch((err) => {
        console.log(err);
      })
  }, [lastId])

  const loadAddressPost = useCallback(async () => {
    console.log('나와라 주소')
    let firsturl = `http://3.34.129.164/api/search/post?address=${address}`
    let commonurl = `http://3.34.129.164/api/search/post?address=${address}&lastId=${lastId}`
    let urlAX = ""
    if (lastId) {
      urlAX = commonurl
      console.log(lastId)
    } else {
      urlAX = firsturl
      console.log(lastId)
    }
    console.log(urlAX)
    await axios.get(urlAX)
      .then((res) => {
        console.log(res.data.content[res.data.content.length-1]?.postId);
        test = res.data.content[res.data.content.length-1]?.postId;
        if (res.data) {
          // console.log(res.data);
          setMorePostTitle('검색어' + ' : ' + address)
          // console.log(setMorePostTitle)
          setMorePostData(prev => {
            // console.log(prev);
            return [...prev, ...res.data.content]
          })
          preventRef.current = true;
        }
        if(res.data.content<8) {
          // console.log(res.data);
          setMorePostTitle('검색어' + ' : ' + search)
          // console.log(setMorePostTitle)
          setMorePostData(prev => {
            // console.log(prev);
            return [...prev, ...res.data.content]
          })
          preventRef.current = false;
        }
      })
      .catch((err) => {
        console.log(err);
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

    </div>
    
  )
}

export default MorePost;