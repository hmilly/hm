import "../styles/profile.scss";
import Contact from "./Contact";
import profile from "../images/profile.jpg";

const Profile = () => {
  return (
    <section id="profile-container">
      <aside>
        <p className="lg-txt">Hi, my name is</p>
        <h1>Holly Millard</h1>
        <h2>Frontend developer</h2>
        <Contact />
      </aside>
      <img src={profile} alt="page owner pic" />
    </section>
  );
};

export default Profile;
