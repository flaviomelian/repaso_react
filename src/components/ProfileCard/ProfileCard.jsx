import PropTypes from "prop-types";
import "./ProfileCard.css";

const ProfileCard = ({ info, getImg }) => {
  const sendImg = () => {
    getImg(info.profileImg); //pasarle la imagen que esta almacenada en profileImg a Profile
  };
  return (
    <div>
      <img
        id="profile-img"
        className="profile-img"
        src="https://media.istockphoto.com/id/684822872/es/foto/triste-hombre-mayor-en-el-bar.jpg?s=612x612&w=is&k=20&c=XMVqdrYFPNIgls212nRsRggt1bZPlXUImofR6EXwqXA="
      />
      <h2>Name: {info.name}</h2>
      <h3>Surname: {info.surname}</h3>
      <p>
        <b>Age:</b> {info.age} years old
      </p>
      <p>
        <b>Pet:</b> {info.pet}
      </p>
      <img
        id="pet-img"
        className="pet-img"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Polish_20230102_131307806_%281%29.jpg/1280px-Polish_20230102_131307806_%281%29.jpg"
      />
      <button onClick={sendImg}>Get profile image</button>
    </div>
  );
};

ProfileCard.propTypes = {
  info: PropTypes.object,
  getImg: PropTypes.func,
};

export default ProfileCard;
