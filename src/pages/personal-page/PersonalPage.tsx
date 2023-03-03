import { useAuth } from "../../hooks/use-auth";
import { useAppDispatch } from "../../hooks/redux";
import { Box, Button, TextField, Typography } from "@mui/material";
import { removeUser } from "../../store/slices/user-slice";
import { useNavigate } from "react-router-dom";

export const PersonalPage = () => {
  const { email, id } = useAuth();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const redirect = () => navigate("/", { replace: true });

  const logOutHandler = () => {
    dispatch(removeUser());
    redirect();
  };
  return (
    <>
      <Box component="div" className="flex flex-col max-w-md w-full mb-4">
        <Typography>User email</Typography>
        <TextField disabled defaultValue={email} />
        <Typography>User personal Id</Typography>
        <TextField disabled defaultValue={id} />
      </Box>
      <Button variant="contained" onClick={logOutHandler}>
        Log out
      </Button>
    </>
  );
};
