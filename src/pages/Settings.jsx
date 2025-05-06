import Line from "../ui/Line";
import Heading from "../ui/Heading";
import UpdateSettingsForm from "../features/settings/UpdateSettingsForm";

function Settings() {
  return (
    <Line type="vertical">
      <Heading as="h1">Settings</Heading>
      <UpdateSettingsForm />
    </Line>
  );
}

export default Settings;
