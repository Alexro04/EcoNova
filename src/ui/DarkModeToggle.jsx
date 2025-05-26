import { HiOutlineSun } from "react-icons/hi";
import useDarkMode from "../context/useDarkMode";
import ButtonIcon from "../ui/ButtonIcon";
import { HiOutlineMoon } from "react-icons/hi2";

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <ButtonIcon onClick={toggleDarkMode}>
      {isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
    </ButtonIcon>
  );
}

export default DarkModeToggle;
