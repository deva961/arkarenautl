import React from "react";

function Loading() {
  return (
    <div className="h-screen flex my-auto">
        
      <div className="flex items-center flex-col mx-auto">
        <div className="animate-spin">
          <img
            src={require("../../assets/images/loading.png")}
            className="h-10"
            alt="loading"
          />
        </div>
        <p className="mt-3">Loading...</p>
      </div>
    </div>
  );
}

export default Loading;
