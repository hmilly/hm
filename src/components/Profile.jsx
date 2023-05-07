import "../styles/profile.scss";
import Contact from "./Contact";

const Profile = () => {
  return (
    <section id="profile">
      <div className="profile-info">
        <p id="lg-txt">Hi, my name is</p>
        <h1>Holly Millard</h1>
        <h2>Frontend developer</h2>
      </div>
      <div className="profile-contact">
        <Contact />
      </div>
    </section>
  );
};

export default Profile;
