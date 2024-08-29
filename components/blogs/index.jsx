import BlogSidebar from "../commons/blog/BlogSidebar";
import Pagination from "../commons/blog/Pagination";
import CopyrightFooter from "../commons/Footer/CopyrightFooter";
import Footer from "../commons/Footer/Footer";
import Header from "../commons/header/DefaultHeader";
import MobileMenu from "../commons/header/MobileMenu";
import PopupSignInUp from "../commons/PopupSignInUp";
import BreadCrumbBlog from "./BreadCrumbBlog";
import Blog from "./Blog";

const index = () => {
  return (
    <>
{/*  
      <Header /> */}

      {/* <!--  Mobile Menu --> */}
      {/* <MobileMenu /> */}

      {/* <!-- Modal --> */}
      <PopupSignInUp />

      {/* <!-- Main Blog Post Content --> */}
      <section className="blog_post_container bgc-f7">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <BreadCrumbBlog />
            </div>
          </div>
          {/* End .row */}

          <div className="row">
            <div className="col-lg-8">
              <div className="main_blog_post_content">
                <Blog />
                {/* End blog item */}

                <div className="mbp_pagination mt20">
                  <Pagination />
                </div>
                {/* End .mbp_pagination */}
              </div>
            </div>
            {/* End .col */}

            <div className="col-lg-4 col-xl-4">
              <BlogSidebar />
            </div>
            {/* End Sidebar column */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>  
    </>
  );
};

export default index;