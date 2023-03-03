import { AppBar } from "@mui/material";
import { Navbar } from "./Navbar";

export const Header = () => {
  return (
    <>
      <AppBar position="static" className="h-14 flex justify-center mb-3">
        <Navbar />
      </AppBar>
    </>
  );
};
