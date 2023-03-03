import { useAppDispatch } from "../../hooks/redux";
import { setUser } from "../../store/slices/user-slice";

import { firebaseAuth } from "../../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Form } from "../../components/common/Form";
import { useNavigate } from "react-router-dom";

export const RegistrationPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const redirect = () => navigate("/", { replace: true });

  const registrationHandler = async (email: string, password: string) => {
    try {
      const user = await createUserWithEmailAndPassword(
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
  return <Form title="Registration" clickHandler={registrationHandler} />;
};
