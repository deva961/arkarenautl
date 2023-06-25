import { Suspense, lazy } from "react";
import Loading from "../../components/loading/Loading";
const Breadcrumb = lazy(() => import("../../components/Breadcrumb"));
const Header = lazy(() => import("../../components/Header/Header"));
const Footer = lazy(() => import("../../components/Footer/Footer"));
const Form = lazy(() => import("../../components/form/Form"));

function TestDrive() {
  return (
    <Suspense fallback={<Loading />}>
      <Header />
      <Breadcrumb title={"Book a test drive"} />
      <Form title={"Book a test drive"} />
      <Footer />
    </Suspense>
  );
}

export default TestDrive;
