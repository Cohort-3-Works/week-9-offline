import "./App.css";

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
              <PostComponent />
            </div>
            <div>
              <PostComponent />
            </div>
            <div>
              <PostComponent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const style = {
  width: 600,
  backgroundColor: "white",
  borderRadius: 10,
  borderColor: "grey",
  borderWidth: 1,
  padding: 20,
  marginBottom: 40,
};

function PostComponent() {
  return (
    <div style={style}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src="https://media.licdn.com/dms/image/v2/D5603AQF2JM6Dnd3uCQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1727767853473?e=1733961600&v=beta&t=BO80R-WXtjqNQAkwhJb1PJAPKt8EthuuU4-YGw-YSdc"
          alt="your profile pic"
          style={{
            width: 30,
            height: 30,
            borderRadius: 20,
          }}
        />
        <div style={{ fontSize: 10, marginLeft: 10, marginBottom: 10 }}>
          <b>Subhajit Chaudhury </b>
          <div>23,888 followers</div>
          <div>12m</div>
        </div>
      </div>
      <div style={{ fontSize: 12 }}>
        Want to know how to win big? Check out how this folks won $6000 of
        bounty
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

export default App;
