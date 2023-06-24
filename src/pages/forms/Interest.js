import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Form from "../../components/form/Form";
import Breadcrumb from '../../components/Breadcrumb'

function Interest() {
  return (
    <>
      <Header />
      <Breadcrumb title={'Register your interest'}/>
      <Form title={"Register your interest"} />
      <Footer />
    </>
  );
}

export default Interest;
