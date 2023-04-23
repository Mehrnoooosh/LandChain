import React from 'react';
import {Link} from 'react-router-dom';

  import '../assets/vendor/aos/aos.css';
  import '../assets/vendor/bootstrap/css/bootstrap.min.css'
  import '../assets/vendor/bootstrap-icons/bootstrap-icons.css'
  import '../assets/vendor/boxicons/css/boxicons.min.css'
  import '../assets/vendor/glightbox/css/glightbox.min.css'
  import '../assets/vendor/swiper/swiper-bundle.min.css'

  import '../assets/css/style.css'

const Index = () => {
  return (
<>
<div>
  <header id="header" className="fixed-top header-transparent">
    <div className="container d-flex align-items-center justify-content-between position-relative">
      <div className="logo">
        <h1 className="text-light"><a href="index.html"><span>LandChain</span></a></h1>
      </div>
      <nav id="navbar" className="navbar">
        <ul>
          <li><a className="nav-link scrollto active" href>Home</a></li>
          <li><Link className="nav-link scrollto" to="/dashboard">Dashboard</Link></li>
          <li><a className="nav-link scrollto" href="#contact">About US</a></li>
          <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle" />
      </nav>
    </div>
  </header>
  <section id="hero">
    <div className="hero-container" data-aos="fade-up">
      <h1>Welcome to LandChain</h1>
      <br />
      <p className="explain">
        The innovative decentralized platform designed to revolutionize the way land transactions are conducted. <br />
        Our application utilizes cutting-edge blockchain technology to provide a secure, transparent, and immutable transaction history for all land-related transactions. <br />
        Say goodbye to the traditional, slow, and cumbersome process of land transactions and embrace the future with LandChain. <br />
        Our platform offers a streamlined and efficient process that saves you time and money while ensuring that your land transactions are secure and trustworthy. <br />
        With LandChain, you can have peace of mind knowing that your transactions are recorded on an unalterable ledger that can be accessed and verified by anyone. <br />
        Join us today and experience the power of blockchain technology for land transactions!
      </p>
    </div>
  </section>
  <main id="main">
  </main>
  <footer id="footer">
    <div className="container">
      <div className="copyright">
        © Copyright <strong><span>LandChain</span></strong>. All Rights Reserved
      </div>
      <div className="credits">
        Designed by <a href>LandChain Team</a>
      </div>
    </div>
  </footer>
  <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></a>
</div>


  </>
  );
};

export default Index;