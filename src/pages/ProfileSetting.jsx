import Topbar from "../components/Topbar";
import ProfileSettingForm from "../components/ProfileSettingForm";
import Footer from "../components/Footer";

export default function ProfileSetting({ onMenuClick }) {
  return (
    <>
      <Topbar
        title="Profile Settings"
        subtitle="Manage your profile information and preferences."
        actionLabel="Save Changes"
        onMenuClick={onMenuClick}
      />
      <ProfileSettingForm />
      <Footer />
    </>
  );
}
