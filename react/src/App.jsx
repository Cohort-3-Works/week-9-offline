import "./App.css";
import { ToggleButton } from "./ToggleButton";
import { PostComponent } from "./PostComponent";
import { ProfileCard } from "./ProfileCard";

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
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
