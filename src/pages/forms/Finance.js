import { Suspense, lazy } from "react";
import Loading from "../../components/loading/Loading";
const Breadcrumb = lazy(() => import("../../components/Breadcrumb"));
const Header = lazy(() => import("../../components/Header/Header"));
const Footer = lazy(() => import("../../components/Footer/Footer"));
const Form = lazy(() => import("../../components/form/Form"));

function Finance() {
  return (
    <Suspense fallback={<Loading />}>
      <Header />
      <Breadcrumb title={'Finance'}/>
      <Form />
      <Footer />
    </Suspense>
  );
}

export default Finance;
