import React from "react";

export default function ProgressBar() {
  const Progress_bar = ({ bgcolor, progress, height }) => {
    const Parentdiv = {
      height: height,
      width: "100%",
      backgroundColor: "whitesmoke",
      borderRadius: 40,
      margin: 50,
    };
    const Childdiv = {
      height: "100%",
      width: `${progress}%`,
      backgroundColor: bgcolor,
      borderRadius: 40,
      textAlign: "right",
    };
    const progresstext = {
      padding: 10,
      color: "black",
      fontWeight: 900,
    };
    return (
      <div style={Parentdiv}>
        <div style={Childdiv}>
          <span style={progresstext}>{`${progress}%`} </span>
        </div>
      </div>
    );
  };
  return (
    <div className="ProgressBar">
      <h3 className="heading">Progress Bar</h3>
      <ProgressBar bgcolor="orange" progress="30" height={30} />
      <ProgressBar bgcolor="red" progress="60" height={30} />
      <ProgressBar bgcolor="#99ff66" progress="50" height={30} />
      <ProgressBar bgcolor="#ff00ff" progress="85" height={30} />
      <ProgressBar bgcolor="#99ccff" progress="95" height={30} />
    </div>
  );
}
