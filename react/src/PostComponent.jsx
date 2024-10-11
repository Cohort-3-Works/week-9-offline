import PropTypes from "prop-types";

const style = {
  width: 600,
  height: 150,
  backgroundColor: "white",
  borderRadius: 10,
  borderColor: "grey",
  borderWidth: 1,
  padding: 20,
  marginBottom: 40,
};

export function PostComponent({
  userName,
  followerCount,
  time,
  image,
  description,
}) {
  return (
    <div style={style}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src={image}
          alt="your profile pic"
          style={{
            width: 60,
            height: 60,
            borderRadius: 60,
          }}
        />
        <div style={{ fontSize: 20, marginLeft: 10, marginBottom: 10 }}>
          <b>{userName} </b>
          <div>{followerCount} followers</div>
          {time !== undefined ? (
            <div style={{ display: "flex" }}>
              <div>{time}</div>
              <img
                src="https://cdn-icons-png.flaticon.com/128/900/900782.png"
                style={{ width: 12, height: 12 }}
              ></img>
            </div>
          ) : null}
        </div>
      </div>
      <div style={{ fontSize: 20 }}>{description}</div>
    </div>
  );
}

// Prop validation using PropTypes
PostComponent.propTypes = {
  userName: PropTypes.string.isRequired,
  followerCount: PropTypes.number.isRequired,
  time: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
