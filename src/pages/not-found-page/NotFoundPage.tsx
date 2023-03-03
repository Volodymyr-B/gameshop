import { Link } from "react-router-dom";
import { Button, Typography } from "@mui/material";

export const NotFoundPage = () => {
  return (
    <>
      <div className="h-[100vh] flex flex-col items-center justify-between">
        <div className="text-center">
          <Typography className="mb-5 bg-red-300">
            Page you are looking for does not exist or is not available
          </Typography>
          <Button variant="contained" component={Link} to={"/"}>
            home
          </Button>
        </div>
        <div />
      </div>
    </>
  );
};
