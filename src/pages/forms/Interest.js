import { Suspense, lazy } from "react";
import Loading from "../../components/loading/Loading";
import { Helmet } from "react-helmet";
const Breadcrumb = lazy(() => import("../../components/Breadcrumb"));
const Header = lazy(() => import("../../components/Header/Header"));
const Footer = lazy(() => import("../../components/Footer/Footer"));
const Form = lazy(() => import("../../components/form/Form"));

function Interest() {
  document.title =
    "Renault Car Booking Online Hyderabad | Book A Car Online | Arka Renault";
  return (
    <Suspense fallback={<Loading />}>
      <Helmet>
        <meta
          name="description"
          content="Renault service center in Hyderabad. Arka Renault is the authorized Renault service center in Hyderabad. Get best offers on scheduled service appointment. Book service appointment today.Free pickup and drop facility available."
        />
      </Helmet>
      <Header />
      <Breadcrumb title={"Register your interest"} />
      <Form title={"Register your interest"} />
      <Footer />
    </Suspense>
  );
}

export default Interest;
