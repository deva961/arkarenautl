import { Suspense, lazy } from "react";
import Loading from "../../components/loading/Loading";
const Breadcrumb = lazy(() => import("../../components/Breadcrumb"));
const Header = lazy(() => import("../../components/Header/Header"));
const Footer = lazy(() => import("../../components/Footer/Footer"));
const Form = lazy(() => import("../../components/form/Form"));

function Quote() {
  document.title = "Get a quote | Renault Hyderabad | Renault Khammam";
  return (
    <Suspense fallback={<Loading />}>
      <Header />
      <Breadcrumb title={"Get a Quote"} />
      <Form title={"Get a Quote"} />
      <Footer />
    </Suspense>
  );
}

export default Quote;
