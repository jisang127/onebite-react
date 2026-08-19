import { useState } from "react";

// 예제 - 전구 컴포넌트
const Bulb = () => {
  // console.log(light);
  const [light, setLight] = useState("OFF");

  return (
    <div>
      {light === "ON" ? (
        <h1 style={{ backgroundColor: "orange" }}>ON</h1>
      ) : (
        <h1 style={{ backgroundColor: "gray" }}>OFF</h1>
      )}
      <button
        onClick={() => {
          setLight(light === "ON" ? "OFF" : "ON");
        }}
      >
        {light === "ON" ? "끄기" : "켜기"}
      </button>
    </div>
  );
};

export default Bulb;
