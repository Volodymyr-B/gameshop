import { Header } from "./components/header/Header";
import { CartPage } from "./pages/cart-page/CartPage";
import { MainPage } from "./pages/main-page/MainPage";
import { RegistrationPage } from "./pages/registration-page/RegistrationPage";
import { NotFoundPage } from "./pages/not-found-page/NotFoundPage";
import { PersonalPage } from "./pages/personal-page/PersonalPage";
import { LogInPage } from "./pages/log-in-page/LogInPage";
import { Footer } from "./components/footer/Footer";
import { Layout } from "./components/layout/Layout";

import { Route, Routes } from "react-router-dom";
import { useAuth } from "./hooks/use-auth";

function App() {
  const { isAuth } = useAuth();
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          {isAuth ? (
            <Route path="/personal" element={<PersonalPage />} />
          ) : (
            <Route path="/login" element={<LogInPage />} />
          )}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
