import "../styles/profile.scss";
import Contact from "./Contact";
import profile from "../images/profile.jpg";

const Profile = () => {
  return (
    <section id="profile">
      <aside className="profile-info">
        <p id="lg-txt">Hi, my name is</p>
        <h1>Holly Millard</h1>
        <h2>Frontend developer</h2>
        <Contact />
      </aside>
        <img src={profile} alt="page owner" />
    </section>
  );
};

export default Profile;
