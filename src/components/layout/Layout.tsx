import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <Container className="flex flex-col min-h-[90vh] items-center">
        <Outlet />
      </Container>
    </>
  );
};
