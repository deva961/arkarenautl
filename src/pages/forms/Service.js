import { Suspense, lazy } from "react";
import { Helmet } from "react-helmet";
import Loading from "../../components/loading/Loading";
const Breadcrumb = lazy(() => import("../../components/Breadcrumb"));
const Header = lazy(() => import("../../components/Header/Header"));
const Footer = lazy(() => import("../../components/Footer/Footer"));
const Form = lazy(() => import("../../components/form/Form"));

function Service() {
  document.title = "Renault Service Center in Hyderabad | Renault Service Center Near Me";
  return (
    <Suspense fallback={<Loading />}>
      <Helmet>
        <meta
          name="description"
          content="Renault service center in Hyderabad. Arka Renault is the authorized Renault service center in Hyderabad. Get best offers on scheduled service appointment. Book service appointment today.Free pickup and drop facility available."
        />
      </Helmet>
      <Header />
      <Breadcrumb title={"Book a Service"} />
      <Form />
      <Footer />
    </Suspense>
  );
}

export default Service;
