import { Suspense, lazy } from "react";
import { Helmet } from "react-helmet";
import Loading from "../../components/loading/Loading";
const Breadcrumb = lazy(() => import("../../components/Breadcrumb"));
const Header = lazy(() => import("../../components/Header/Header"));
const Footer = lazy(() => import("../../components/Footer/Footer"));
const Form = lazy(() => import("../../components/form/Form"));

function Contact() {
  document.title = "Contact Us | Renault Hyderabad | Renault Khammam";
  return (
    <Suspense fallback={<Loading />}>
      <Helmet>
        <meta
          name="description"
          content="Enquiry of any new Renault cars, Latest on going offers on Renault Triber, Kwid & Kiger. Insurance Renewal. Test drive booking online. Get Renault quote online. Call now."
        />
      </Helmet>
      <Header />
      <Breadcrumb title={"Contact Us"} />
      <Form title={"Contact Us"} />
      <Footer />
    </Suspense>
  );
}

export default Contact;
