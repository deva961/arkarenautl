import React, { Suspense, lazy, useContext, useEffect, useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Detail from "./pages/Detail";
import Popup from "./components/popup/Popup";
import Loading from "./components/loading/Loading";
import { AuthContext } from "./context/AuthContext";
import Thankyou from "./pages/Thankyou";

const Home = lazy(() => import("./pages/Home"));
const Leads = lazy(() => import("./pages/admin/leads/Leads"));
const Login = lazy(() => import("./pages/admin/auth/Login"));
const Zone = lazy(() => import("./pages/offer/Zone"));
const Offers = lazy(() => import("./pages/offer/Offers"));
const Finance = lazy(() => import("./pages/forms/Finance"));
const TestDrive = lazy(() => import("./pages/forms/TestDrive"));
const Interest = lazy(() => import("./pages/forms/Interest"));
const Contact = lazy(() => import("./pages/forms/Contact"));
const Complaint = lazy(() => import("./pages/forms/Complaint"));
const Legal = lazy(() => import("./pages/Legal"));
const About = lazy(() => import("./pages/About"));
const Brochure = lazy(() => import("./pages/Brochure"));
const Faq = lazy(() => import("./pages/Faq"));

function App() {
  const { currentUser } = useContext(AuthContext);
  const ProtectedRoute = ({ children }) => {
    return currentUser ? children : <Navigate to="/" />;
  };

  const [open, setOpen] = useState(false);

  const ScrollTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
      setTimeout(() => {
        if (sessionStorage.getItem("popup") !== "true") {
          setOpen(true);
          sessionStorage.setItem("popup", "true");
        }
      }, 1000);
    }, [pathname]);
    return null;
  };
  return (
    <>
      <ScrollTop />
      <Toaster />
      <div className="block md:block">
        <Popup open={open} setOpen={setOpen} />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/listings/:id" element={<Detail />} />
            <Route path="/car-offers" element={<Zone />} />
            <Route path="/offers/:id" element={<Offers />} />
            <Route path="/renault-cars-hyderabad" element={<Brochure />} />
            <Route path="/renault-car-test-drive" element={<TestDrive />} />
            <Route path="/renault-car-booking-online" element={<Interest />} />
            <Route path="/finance" element={<Finance />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register-a-complaint" element={<Complaint />} />
            <Route path="/privacy-and-legal" element={<Legal />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/thank-you" element={<Thankyou />} />
            <Route
              path="*"
              element={<div className="text-center">404 | Not Found </div>}
            />

            <Route path="/login" element={<Login />} />

            <Route
              path="/admin/leads"
              element={
                <ProtectedRoute>
                  <Leads />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Suspense>
      </div>
      <div className="hidden md:hidden text-center text-4xl">
        Doesn't support for Tablets and Desktop
      </div>
    </>
  );
}

export default App;
