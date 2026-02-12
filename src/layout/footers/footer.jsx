import SocialLinks, { CopyRight } from '@/src/common/social-links';
import React from 'react';

const footer_content = {
   about: "About Us",
   about_des: <>One Mobility Group is a group of companies that precisely enhances mass transit approachability, efficiency, and convenience for smarter cities worldwide.</>,
   get_in_touch: "Get In Touch",
   location: <>One Mobility Group</>,
   office_time: <>Mon – Fri: 8.00 – 18.00 <br /> Sat – Sun: 9.00 – 15.00</>,
   phone: <>Contact us for more <br /> information</>,
   pages_title: "Main Pages",
   pages: [
      {title: "About Us", link: "/about"},
      {title: "Our Services", link: "/service"},
      {title: "Contact", link: "/contact"},
      {title: "Portfolio", link: "/portfolio"},
   ]
}
const {about, about_des, get_in_touch, location, office_time, phone, pages_title, pages}  = footer_content

const Footer = ({style_2}) => {
    return (
        <>
     <footer>
      <div className={`footer-widget-area pt-90 pb-50 ${style_2 ? "footer-area-white" : "footer-bg "}`}>
         <div className="container">
            <div className="row">
               <div className="col-lg-3 col-md-6">
                  <div className={`${style_2 ? "footer-widget-2" : "footer-widget"} footer-col-1 mb-50`}>
                     <h3 className="footer-widget-title">{about}</h3>
                     <p>{about_des}</p>
                     {style_2 && <a className="footer-link" href="#">Get Started Now <i className="far fa-long-arrow-alt-right"></i></a>}
                  </div>
               </div>
               <div className="col-lg-3 col-md-6">
                  <div className={`${style_2 ? "footer-widget-2" : "footer-widget"} footer-col-2 mb-50`}>
                     <h3 className="footer-widget-title">{get_in_touch}</h3>
                     <div className="footer-contact">
                        <div className="footer-contact-item">
                           <p>{location}</p>
                        </div>
                        <div className="footer-contact-item">
                           <p>{office_time}</p>
                        </div>
                        <div className="footer-contact-item">
                           <p>{phone}</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-lg-3 col-md-6">
                  <div className={`footer-widget ${style_2 ? "footer-widget-2" : ""} footer-col-3 mb-50`}>
                     <h3 className="footer-widget-title">{pages_title}</h3>
                     <ul>
                        {pages.map((item , i)  => 
                          <li key={i}><a href={item.link}>{item.title}</a></li>                       
                        )} 
                     </ul>
                  </div>
               </div>
               <div className="col-lg-3 col-md-6"> 
                  <div className={`footer-widget ${style_2 ? "footer-widget-2 footer-col-3" : "footer-col-4"} mb-50`}>
                     <h3 className="footer-widget-title">Get Newsletter</h3>
                     <p>Sign up today for hints, tips & the
                        latest updates</p>
                     <div className="footer-subscribe">
                        <form onSubmit={e => e.preventDefault()}>
                           <input type="email" placeholder="Email address" />
                           <button type="submit"> <i className="far fa-envelope-open"></i></button>
                        </form>
                     </div>
                     <div className="footer-social mt-20">
                        <SocialLinks /> 
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div className="copyright-area theme-bg pt-20 pb-20">
         <div className="container">
            <div className="row">
               <div className="col-xl-7 col-lg-7 text-lg-start col-12 text-center ">
                  <div className="copyright-text">
                     <p>&copy; {new Date().getFullYear()} One Mobility Group. All rights reserved.</p> 
                  </div>
               </div>
               <div className="col-xl-5 col-lg-5 text-lg-end col-12 text-center ">
                  <div className="footer-menu">
                     <ul>
                        <li><a href="/privacy">Privacy Policy</a></li>
                        <li><a href="/terms">Terms of Use</a></li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </footer>
        </>
    );
};

export default Footer;
