import React, { useEffect } from "react";
import axios from "axios";

export default function useAddressSearch( query, pageNumber ) {
  let cancel;
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [addresses, setAddresses] = React.useState([]);
  const [hasMore, setHasMore] = React.useState(false);
  

  React.useEffect(()=>{
    setAddresses([])
  },[query])

  useEffect(() => {
    setLoading(true)
    setError(false)
  let cancel
    axios({
      method: "get",
      url: `https://www.juso.go.kr/addrlink/addrLinkApi.do`,
      params: {
        keyword: query,
        countPerPage: 30,
        confmKey: "devU01TX0FVVEgyMDIyMDgwOTIzMTUyMjExMjg2NDc=",
        resultType :'json',
        currentPage: pageNumber,

      },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then(function (response) {
        console.log(response.data)
        if(response.data.results.juso){
          setAddresses(prevAddress=>{
            return [...new Set([...prevAddress,...response.data.results.juso.map((v)=>v.roadAddr)])]
         
          })
          // console.log(addresses)
          setHasMore(response.data.results.juso.length>0)
          setLoading(false)
        }
     
       
      })
      .catch((e) => {
        setError(true)
      if(axios.isCancel(e))return
      });
      return()=>cancel()
  }, [query, pageNumber]);
  return { loading, addresses, error, hasMore };
}
