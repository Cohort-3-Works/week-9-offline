export function ProfileCard() {
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
