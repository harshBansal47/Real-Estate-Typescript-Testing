"use client"
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "@/features/modal/modalSlice";

export default function Navbar() {
    const path = usePathname();
    const dispatch = useDispatch();
    const isModalOpen = useSelector((state) => state.modal.isModalOpen);
    const { username, isLoggedIn, role } = useSelector((state) => state.login);


    return (
        <header
            className={`header-nav menu_style_home_one style2 navbar-scrolltofixed stricky main-menu `}
        >
            <div className="container-fluid p0">
                {/* <!-- Menu Toggle btn--> */}
                <Link href="/" className="navbar_brand float-start dn-smd">
                    <Image
                        width={40}
                        height={45}
                        className="logo1 img-fluid"
                        src="/assets/images/header-logo2.png"
                        alt="header-logo2.png"
                    />
                    <Image
                        width={40}
                        height={45}
                        className="logo2 img-fluid"
                        src="/assets/images/header-logo2.png"
                        alt="header-logo2.png"
                    />
                    <span>FindHouse</span>
                </Link>
                {/* site logo brand */}

                <nav>
                    <ul id="respMenu" className="ace-responsive-menu text-end d-lg-block d-none" data-menu-style="horizontal">
                        <li className="dropitem">
                            <Link href="/" className={path === "/" ? "ui-active" : undefined}><span className="title">Home</span></Link>
                        </li>
                        <li className="dropitem">
                            <Link href="/blog" className={path === "/blog" ? "ui-active" : undefined}><span className="title">Blog</span></Link>
                        </li>
                        <li className="dropitem">
                            <Link href="/properties" className={path === "/properties" ? "ui-active" : undefined}><span className="title">Properties</span></Link>
                        </li>
                        <li className="dropitem">
                            <Link href="/contact" className={path === "/contact" ? "ui-active" : undefined}><span className="title">Contact</span></Link>
                        </li>
                        <li className="dropitem">
                            <Link href="/about" className={path === "/about" ? "ui-active" : undefined}>

                                <span className="title">About Us</span>

                            </Link>
                            <ul className="sub-menu">
                                <li className="dropitem arrow">
                                    <Link href="/about" className={path === "/about" ? "ui-active" : undefined}>

                                        <span className="dn-1199 ms-1">About</span>

                                    </Link>
                                </li>
                                <li className="dropitem arrow">
                                    <Link href="/testimonials" className={path === "/about" ? "ui-active" : undefined}>

                                        <span className="dn-1199 ms-1">Testimonials</span>

                                    </Link>
                                </li>
                            </ul>
                        </li>

                        {
                            isLoggedIn ? (
                                <div className="btn  flexbox" >
                                    <div className="user-button">
                                        <div className="user-avatar">{username[0].toUpperCase()}</div>
                                        <div className="username">{username}</div>
                                    </div>

                                </div>
                            ) : (<li className={`list-inline-item list_s`}>
                                <button
                                    className="btn flaticon-user"
                                    data-bs-toggle="modal"
                                    data-bs-target=".bd-example-modal-lg"
                                    onClick={() => { if (isModalOpen === false) { dispatch(openModal()) } }}
                                >
                                    <span className="dn-lg">Login/Register</span>
                                </button>
                            </li>
                            )
                        }

                        {/*  */}



                        <li className="list-inline-item add_listing">
                            <Link href="/create-listing">

                                <span className="flaticon-plus"></span>
                                <span className="dn-lg"> Create Listing</span>

                            </Link>
                        </li>
                    </ul>
                </nav>
                {/* End .navbar */}
            </div>
        </header>
    );
}