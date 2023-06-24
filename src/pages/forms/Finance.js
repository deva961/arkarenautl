import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Form from "../../components/form/Form";
import Breadcrumb from '../../components/Breadcrumb'

function Finance() {
  return (
    <>
      <Header />
      <Breadcrumb title={'Finance'}/>
      <Form title={"Finance"} />
      <Footer />
    </>
  );
}

export default Finance;
