import React, { useEffect, useState } from "react";

const Main = () => {

    // google인가 뽑아오기
    const parsedHash = new URLSearchParams(window.location.hash.substring(1));
    const accessToken = parsedHash.get("access_token");
    console.log(accessToken)
    // const { data } = Api.post("oauth/google", { accessToken });

    // axios..?
    // React.useEffect()

  return (
    <div className="main">
      Main
    </div>
  )
}
export default Main