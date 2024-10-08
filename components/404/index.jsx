import CopyrightFooter from "@/components/commons/Footer/CopyrightFooter";
import Footer from "../commons/Footer/Footer";
// import Header from "../commons/header/DefaultHeader";
// import MobileMenu from "../commons/header/MobileMenu";
import PopupSignInUp from "../commons/PopupSignInUp";
import ErrorPageContent from "./ErrorPageContent";

const index = () => {
  return (
    <>
      {/* <!-- Main Header Nav --> */}
      {/* <Header /> */}

      {/* <!--  Mobile Menu -->
      <MobileMenu /> */}

      {/* <!-- Modal -->
      <PopupSignInUp /> */}

      {/* <!-- Our Error Page --> */}
      <section className="our-error bgc-f7">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1 text-center">
              <ErrorPageContent />
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Our Footer --> */}
      {/* <section className="footer_one">
        <div className="container">
          <div className="row">
            <Footer />
          </div>
        </div>
      </section> */}

      {/* <!-- Our Footer Bottom Area --> */}
      {/* <section className="footer_middle_area pt40 pb40">
        <div className="container">
          <CopyrightFooter />
        </div>
      </section> */}
    </>
  );
};

export default index;