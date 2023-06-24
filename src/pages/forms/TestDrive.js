import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Form from "../../components/form/Form";
import Breadcrumb from "../../components/Breadcrumb";

function TestDrive() {
  return (
    <>
      <Header />
      <Breadcrumb title={"Book a test drive"} />
      <Form title={"Book a test drive"} />
      <Footer />
    </>
  );
}

export default TestDrive;
