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
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
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
  );
}

const style = {
  width: 400,
  backgroundColor: "white",
  borderRadius: 10,
  borderColor: "grey",
  borderWidth: 1,
  padding: 20,
  marginBottom: 20,
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

export default App;
