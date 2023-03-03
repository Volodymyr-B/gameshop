import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/use-auth";

import { Button, Typography } from "@mui/material";

export const Navbar = () => {
  const { isAuth } = useAuth();
  return (
    <div className="flex items-center justify-between">
      <Typography className="ml-8">Game Shop</Typography>
      <div className="text-end mr-8">
        <Button color="inherit" component={Link} to="/">
          main
        </Button>
        <Button color="inherit" component={Link} to="/cart">
          cart
        </Button>
        <Button color="inherit" component={Link} to="/registration">
          registration
        </Button>
        {isAuth ? (
          <Button color="inherit" component={Link} to="/personal">
            Personal
          </Button>
        ) : (
          <Button color="inherit" component={Link} to="/login">
            Log in
          </Button>
        )}
      </div>
    </div>
  );
};
