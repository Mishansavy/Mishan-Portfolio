import React from "react";

const SKILLS = [
  { type: "HTML", level: 100 },
  { type: "CSS", level: 70 },
  { type: "JavaScript", level: 45 },
  { type: "BootStrap", level: 90 },
  { type: "WordPress", level: 100 },
  { type: "Elementor", level: 98 },
  { type: "React.js", level: 25 },
  { type: "PHP", level: 40 },
];

const container = {
  height: 20,
  width: "100%",
  backgroundColor: "#fff",
  borderRadius: 50,
  margin: 50,
};

const label = {
  // padding: "1rem",
  color: "#000000",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
};

function ProgressBar() {
  const firstfourlist = SKILLS.slice(0, 4);
  const secondfourlist = SKILLS.slice(4, 8);
  return (
    <div className="progressbar">
      <ul style={{ listStyle: "none", padding: "0px" }} className="skills">
        {firstfourlist.map((skill, index) => {
          const bar = {
            height: "100%",
            width: `${skill.level}%`,
            backgroundColor: "#90CAF9",
            borderRadius: "inherit",
            padding: "9px 20px ",
          };

          return (
            <li key={skill.type}>
              <div style={container}>
                <div
                  style={bar}
                  role="progressbar"
                  aria-valuenow={skill.level}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <span style={label}>
                    {" "}
                    <div style={{ color: "#fff" }}>{`${skill.type}`}</div>
                    {/* <div style={{ color: "#fff" }}>{`${skill.level}%`}</div> */}
                  </span>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <ul style={{ listStyle: "none", padding: "0px" }} className="skills">
        {secondfourlist.map((skill, index) => {
          const bar = {
            height: "100%",
            width: `${skill.level}%`,
            backgroundColor: "#90CAF9",
            borderRadius: "inherit",
            padding: "9px 20px ",
          };

          return (
            <li key={skill.type}>
              <div style={container}>
                <div
                  style={bar}
                  role="progressbar"
                  aria-valuenow={skill.level}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <span style={label}>
                    {" "}
                    <div style={{ color: "#fff" }}>{`${skill.type}`}</div>
                    {/* <div style={{ color: "#fff" }}>{`${skill.level}%`}</div> */}
                  </span>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ProgressBar;
