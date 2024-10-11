import "./App.css";
import { ToggleButton } from "./ToggleButton";
import { PostComponent } from "./PostComponent";
import { ProfileCard } from "./ProfileCard";

function App() {
  const posts = [
    {
      title: "Subhajit Chaudhury",
      followerCount: 23888,
      time: "12m",
      image:
        "https://media.licdn.com/dms/image/v2/D5603AQF2JM6Dnd3uCQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1727767853473?e=1733961600&v=beta&t=BO80R-WXtjqNQAkwhJb1PJAPKt8EthuuU4-YGw-YSdc",
      description:
        "Want to know how to win big? Check out how this folks won $6000 of bounty",
    },
  ];

  // based on this posts array i want to render the components thats why somehow we need to use for loop here
  // how can we iterate over it ?

  // i want to render more and more post for that i need to create an array of posts

  const postComponents = posts.map((post) => (
    <PostComponent
      title={post.title}
      followerCount={post.followerCount}
      time={post.time}
      image={post.image}
      description={post.description}
    />
  ));

  function addPost() {}

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
          <button onClick={addPost}>Add Post</button>
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
            <div>{postComponents}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
