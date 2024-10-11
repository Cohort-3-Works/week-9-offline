import "./App.css";
import { useState } from "react";
import { PostComponent } from "./PostComponent";

function App() {
  return (
    <div
      style={{
        backgroundColor: "#dfe6e9",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ display: "flex" }}>
        <div id="card-profile" style={{ marginRight: 100, marginTop: 50 }}>
          <ToggleButton />
          <ProfileCard />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginRight: 500,
          }}
        >
          <div id="all-posts" style={{ width: 600, marginTop: 50 }}>
            <div>
              <PostComponent
                userName="Subhajit Chaudhury"
                followerCount={23888}
                time="12m"
                image="https://media.licdn.com/dms/image/v2/D5603AQF2JM6Dnd3uCQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1727767853473?e=1733961600&v=beta&t=BO80R-WXtjqNQAkwhJb1PJAPKt8EthuuU4-YGw-YSdc"
                description="Want to know how to win big? Check out how this folks won $6000 of bounty"
              />
            </div>
            <div>
              <PostComponent
                userName="Piyush Garg"
                followerCount={5000}
                time="5h"
                image="https://media.licdn.com/dms/image/v2/D4D03AQEbCS8vw7XXug/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1668748025406?e=1733961600&v=beta&t=zXpF1kT4O5Z8yq8xvUsbnocgd0lzgrpZtUYwlQH-C20"
                description="Excited to share my new project on GitHub!"
              />
            </div>
            <div>
              <PostComponent
                userName="Piyush Garg"
                followerCount={5000}
                image="https://media.licdn.com/dms/image/v2/D4D03AQEbCS8vw7XXug/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1668748025406?e=1733961600&v=beta&t=zXpF1kT4O5Z8yq8xvUsbnocgd0lzgrpZtUYwlQH-C20"
                description="Excited to dance!"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProfileCard() {
  return (
    <div id="profile-card">
      <div
        style={{
          height: 400,
          width: 400,
          marginBottom: 20,
          backgroundColor: "white",
          borderRadius: 50,
        }}
      >
        <img
          src="https://media.licdn.com/dms/image/v2/D5603AQF2JM6Dnd3uCQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1727767853473?e=1733961600&v=beta&t=BO80R-WXtjqNQAkwhJb1PJAPKt8EthuuU4-YGw-YSdc"
          alt="your profile pic"
          style={{
            width: 90,
            height: 90,
            borderRadius: 50,
            marginTop: 50,
            marginLeft: 40,
          }}
        ></img>
        <div>
          <h1
            style={{
              color: "black",
              marginTop: 20,
              marginLeft: 30,
              marginRight: 30,
            }}
          >
            Subhajit Chaudhury
          </h1>
          <p style={{ color: "black", marginLeft: 30 }}>
            🚀Tech Geek | B.Tech Student | Exploring MERN Stack & TypeScript |
            Open-Source Contributor🌟
          </p>
          <div style={{ color: "black", marginLeft: 30 }}>
            Jamshedpur , Jharkhand
          </div>
          <div
            style={{
              border: "2px dotted black",
              height: 50,
              width: 350,
              marginLeft: 20,
              marginTop: 20,
              borderRadius: 10,
            }}
          >
            <p
              style={{
                color: "black",
                fontSize: 25,
                marginLeft: 100,
                marginTop: 10,
              }}
            >
              + Experience
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ToggleButton() {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      {toggle ? <div>Hello i am conditonally rendered</div> : null}
    </div>
  );
}

export default App;
