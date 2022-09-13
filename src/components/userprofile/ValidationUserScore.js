import React from 'react'
import axios from 'axios';

const ValidationUserScore = ({showProfileAX,userChoiceValidation,}) => {
    
    const likePlusScore = async () => {
        const Auth = sessionStorage.getItem("token");
    
        await axios
          .post(
            "http://3.34.129.164/api/likes",
            { userId: userChoiceValidation },
            {
              headers: {
                Authorization: Auth,
              },
            }
          )
          .then((res) => {
            console.log(res);
            showProfileAX();
          })
          .catch((err) => {
            console.log(err.response.data);
            alert(err.response.data);
          });
      };
    
      const dislikePlusScore = async () => {
        const Auth = sessionStorage.getItem("token");
    
        await axios
          .post(
            "http://3.34.129.164/api/hates",
            { userId: userChoiceValidation },
            {
              headers: {
                Authorization: Auth,
              },
            }
          )
          .then((res) => {
            console.log(res);
    
            showProfileAX();
          })
          .catch((err) => {
            console.log(err.response);
            alert(err.response.data);
          });
      };
  return (
    <div className="user-wrap-like">
    <div className="user-like" onClick={dislikePlusScore}>
      <div className="user-like-text font-bold">-1 싫어요</div>
    </div>
    <div
      className="user-like"
      style={{ backgroundColor: "#FFBB31" }}
      onClick={likePlusScore}
    >
      <div
        className="user-like-text font-bold"
        style={{ color: "white" }}
      >
        +1 좋아요
      </div>
    </div>
  </div>
  )
}

export default ValidationUserScore