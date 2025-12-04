import deva from '../assets/deva.png';
export default function Profile() {
  return (
    <div className="page">
      <h2>My Profile</h2>

      <img
        src={deva}
        alt="profile"
        className="profile-img"
      />

      <p>
        This is my profile page. I am learning React and building a 3-page
        navigation app with About, Profile, and Edit features.
      </p>
    </div>
  );
}
