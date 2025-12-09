import InvalidPassword from "./InValidPassword";
import ValidPassword from "./ValidPassword";

const Password = ({ isValid }) => (isValid ? <ValidPassword /> : <InvalidPassword />);

export default Password;
