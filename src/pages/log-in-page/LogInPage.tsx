import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/redux";
import { signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../../firebase/firebase";
import { setUser } from "../../store/slices/user-slice";
import { Form } from "../../components/common/Form";

export const LogInPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const redirect = () => navigate("/", { replace: true });

  const logInHandler = async (email: string, password: string) => {
    try {
      const user = await signInWithEmailAndPassword(
        firebaseAuth,
        email,
        password
      );
      dispatch(
        setUser({
          email: user.user.email,
          id: user.user.uid,
        })
      );
      redirect();
    } catch (error) {
      alert(error);
    }
  };
  return <Form title="Log in" clickHandler={logInHandler} />;
};
