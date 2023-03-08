import React, { useEffect, useRef, useState } from "react";
import { ImSpinner2 } from "react-icons/im";
import { blogData } from "./blogdata";

function Loader() {
  return (
    <button
      type="button"
      className="flex justify-center items-center gap-4 rounded mb-2"
      disabled
    >
      <ImSpinner2 className="animate-spin" size={52} />
      Hold on! Fetching latest blog posts...
    </button>
  );
}

export default function Blog() {
  const [isLoading, setIsLoading] = useState(false);
  const iframeRef = useRef();
  const blankDivRef = useRef();

  useEffect(() => {
    return
    // try {
    //   iframeRef?.current?.querySelector(".tgme_header_right_column").style?.display = "none"
    // }
    // catch (err) {

    // }
    console.log(iframeRef.current);
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading]);


  useEffect(() => {
    // blankDivRef.current.innerHTML = blogData
  }, [])

  return (
    <div
      style={{
        height: "calc(87vh)",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {isLoading && <Loader />}
     
      <div className="overflow-auto" ref={blankDivRef}></div>
     
      <iframe
        onLoad={() => setIsLoading(false)}
        ref={iframeRef}
        width="100%"
        height="100%"
        src="/api/tgram"
      ></iframe>
    </div>
  );
}