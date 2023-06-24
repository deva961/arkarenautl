import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Form from "../../components/form/Form";
import { Helmet } from "react-helmet";
import Breadcrumb from "../../components/Breadcrumb";

function Contact() {
  document.title = "Contact Us | Renault Hyderabad | Renault Khammam";
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Enquiry of any new Renault cars, Latest on going offers on Renault Triber, Kwid & Kiger. Insurance Renewal. Test drive booking online. Get Renault quote online. Call now."
        />
      </Helmet>
      <Header />
      <Breadcrumb title={"Contact Us"}/>
      <Form title={"Contact Us"} />
      <Footer />
    </>
  );
}

export default Contact;
