import './applicationfooter.css';
import { Footer } from "flowbite-react";
// import logo from "../../../image/logo.png";
import styled from 'styled-components';

const ApplicationFooter = () => {
    // const currentYear = new Date().getFullYear();

    const LinkGroup = styled.div`
list-style: none;
padding: 0;
margin: 0;
`;

    const Link = styled.a`
text-decoration: none;
display: block;
margin-bottom: 10px; /* Adjust spacing as needed */
font-size: 12px;
color:white;
&:hover {
    text-decoration: underline;
  }
`;

    return (
        // <footer className="footer-home"> 
        //     <div className="footer-home-wrapper">
        //         <div className="footer-home-left">
        //             Version 1.0.0
        //             <span style={{ margin: '0 10px' }}>|</span>&copy; {currentYear} DevQAExpert Solution Pvt Ltd
        //         </div>
        //         <div className="footer-home-center">
        //             <Link to="/TermsNCondition" target="_blank">Terms & Conditions</Link> | {' '}
        //             <Link to="/PrivacyPolicy" target="_blank">Privacy Policy</Link> | {' '}
        //             <Link to="/ReportABug" target="_blank">Report a Bug</Link>
        //         </div>
        //         <div className="footer-home-right">
        //             <span> Powered By : </span>
        //             <span style={{ fontWeight: "bold" }}>
        //                 <a href="https://devqaexpert.com/" target="_blank">DevQAExpert</a>
        //             </span>
        //         </div>
        //     </div>
        // </footer>
        <Footer bgDark>
            <div className="w-full">
                <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
                    <div>
                        <div className="navbar-logo">
                            {/* <img src={logo} alt="Logo" /> */}
                        </div>
                        <LinkGroup>
                            <Link href="#">About Us</Link>
                            <Link href="#">Product Overview</Link>
                            <Link href="#">Plans & Subscription</Link>
                            <Link href="#">Your Benefits</Link>
                            <Link href="#">FAQ </Link>
                            <Link href="#">Contact Us </Link>
                            <Link href="#">Get a Demo </Link>
                            <Link href="#">Free Trial</Link>
                        </LinkGroup>
                    </div>
                    <div>
                        <Footer.Title title="Solutions" />
                        <LinkGroup col>
                            <Link href="#">Functional Testing</Link>
                            <Link href="#">Non-Functional Testing</Link>
                            <Link href="#">API Testing </Link>
                            <Link href="#">E-Commerce Industry</Link>
                            <Link href="#">Health Care Industry</Link>
                            <Link href="#">FinTech Industry</Link>
                            <Link href="#">Remote Monitoring Industry </Link>
                            <Link href="#">Banking Industry </Link>
                            <Link href="#">POS Industry</Link>
                        </LinkGroup>
                    </div>
                    <div>
                        <Footer.Title title="Features" />
                        <LinkGroup col>
                            <Link href="#">AI Testing Platform</Link>
                            <Link href="#">Functional Testing Software with AI</Link>
                            <Link href="#">Automated Manual Testing Tools</Link>
                            <Link href="#">Test Case Generation</Link>
                            <Link href="#">Codeless Testing</Link>
                            <Link href="#">Functional Testing Software</Link>
                            <Link href="#">Low Code Test Generation</Link>
                            <Link href="#">Manual Testing Tool</Link>
                        </LinkGroup>
                    </div>
                    <div>
                        <Footer.Title title="Top Testing Tools" />
                        <LinkGroup col>
                            <Link href="#">QA Testing Tools</Link>
                            <Link href="#">AI Testing Tools</Link>
                            <Link href="#">AI-powered Testing Platforms</Link>
                            <Link href="#">Next-Gen Software Testing Tools</Link>
                            <Link href="#">AI-Gen Manual Testing Tool</Link>
                            <Link href="#">Automated Manual Test Case Generation</Link>
                        </LinkGroup>
                    </div>
                </div>
            </div>
        </Footer>
    );
}

export default ApplicationFooter;
