"use client"
import Footer from "@/components/commons/Footer/Footer";
import CopyrightFooter from "@/components/commons/Footer/CopyrightFooter";
import Navbar from "@/components/commons/Navbar/Navbar";
import PopupSignInUp from "@/components/commons/PopupSignInUp";
import Wrapper from "@/components/layout/Wrapper";
import { Provider } from "react-redux";
import { store } from "@/store/store"

export default function GlobalLayout({ children }: { children: React.ReactNode }) {
    return (
        <Wrapper>
            <Provider store={store}>
                <Navbar />
                <PopupSignInUp />
                {children}
                <section className="footer_one">
                    <div className="container">
                        <div className="row">
                            <Footer />
                        </div>
                    </div>
                </section>

                {/* <!-- Our Footer Bottom Area --> */}
                <section className="footer_middle_area pt40 pb40">
                    <div className="container">
                        <CopyrightFooter />
                    </div>
                </section>
            </Provider>
        </Wrapper>
    )
}