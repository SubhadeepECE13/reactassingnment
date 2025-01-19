import React, { useState } from "react";
import "./../styles/HeroSection.css"; 
import newFeatureImg from "./../assets/Badge group.png";

const faqData = [
  {
    question: "Is there a free trial available?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    question: "Can I change my plan later?",
    answer: "Yes, you can switch between plans anytime from your account settings.",
  },
  {
    question: "What is your cancellation policy?",
    answer: "You can cancel anytime. If you cancel within the first 30 days, you’ll receive a full refund.",
  },
  {
    question: "Can other info be added to an invoice?",
    answer: "Yes, you can add additional billing details during the payment process.",
  },
  {
    question: "How does billing work?",
    answer: "We bill annually or monthly depending on the plan you choose. Billing details are available in your account.",
  },
  {
    question: "How do I change my account email?",
    answer: "You can change your account email from the profile settings in your account dashboard.",
  },
];
const blogData = [
  {
    category: "Design",
    title: "UX review presentations",
    description:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    author: "Olivia Rhye",
    date: "20 Jan 2024",
    image: "/src/assets/bl1.png", 
  },
  {
    category: "Product",
    title: "Migrating to Linear 101",
    description:
      "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.",
    author: "Phoenix Baker",
    date: "19 Jan 2024",
    image: "/src/assets/bl2.png", 
  },
  {
    category: "Software Engineering",
    title: "Building your API stack",
    description:
      "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
    author: "Lana Steiner",
    date: "18 Jan 2024",
    image: "/src/assets/bl3.png", 
  },
];

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="hero-section">
      <nav className="navbar">
        <div className="profile">
          <img src="/src/assets/logo.png" alt="logo" className="logo-image" />
        </div>
        <ul className="nav-links">
  <li className="text-lg-medium">
    Home
  </li>
  <li className="text-lg-medium dropdown">
    Products
    <span className="dropdown-icon">↓</span>
    <ul className="dropdown-menu">
      <li>Product 1</li>
      <li>Product 2</li>
      <li>Product 3</li>
    </ul>
  </li>
  <li className="text-lg-medium dropdown">
    Resources
    <span className="dropdown-icon">↓</span>
    <ul className="dropdown-menu">
      <li>Resource 1</li>
      <li>Resource 2</li>
      <li>Resource 3</li>
    </ul>
  </li>
  <li className="text-lg-medium">Pricing</li>
</ul>

        <div className="profile">
          <img
            src="/src/assets/profile.png"
            alt="Profile"
            className="profile-image"
          />
        </div>
      </nav>

      <div className="hero-content">
        <div className="new-feature">
          <a href="#team-dashboard">
            <img
              src={newFeatureImg}
              alt="New Feature"
              className="new-feature-img"
            />
          </a>
        </div>
        <h1 className="textmedium">Beautiful analytics to grow smarter</h1>
        <p className="textmedium">
          Powerful, self-serve product and growth analytics to help you convert,
          engage,
          <br />
          and retain more users. Trusted by over 4,000 startups.
        </p>
        <div className="hero-buttons">
          <button className="demo-btn text-lg-medium">Demo</button>
          <button className="signup-btn text-lg-medium">Sign up</button>
        </div>
      </div>
      <div className="image1">
        <img src="/src/assets/image1.png" alt="image" className="image1" />
      </div>
      <div className="socialproof">
        <img src="/src/assets/Socialproof.png" alt="image" className="socialproof" />
      </div>
      <div className="feature">
        <img src="/src/assets/Featuresection.png" alt="image" className="feature" />
      </div>
      <div className="testimonal">
        <img src="/src/assets/Testimonial.png" alt="image" className="testimonal" />
      </div>
      <div className="container">
        <img src="/src/assets/Container2.png" alt="image" className="container" />
      </div>
      
      {/* FAQ Section */}
      <div className="faq-section">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
          >
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <span className="text-lg-medium">{faq.question}</span>
              <button
                className={`faq-toggle-btn ${activeIndex !== index ? "plus" : ""}`}
                onClick={() => toggleFAQ(index)}
              ></button>
            </div>
            {activeIndex === index && (
              <div className="faq-answer text-lg-medium">{faq.answer}</div>
            )}
          </div>
        ))}
       <div className="faq-section-container">
  <div className="faq-avatars">
    <img src="/src/assets/Avatar.png" alt="Avatar" className="avatar" />
  </div>
  
  <div className="parent-container">
    <h1 className="textmedium">Still have questions?</h1>
    <h2 className="textu">
      Can’t find the answer you’re looking for? Please chat to our friendly team.
    </h2>
  </div>

  <button className="faq-button">Get in touch</button>
</div>

{/* Blog Section */}
<div className="blog-section">
<div className="blog-header">
          <div className="blog-header-content">
            <span className="blog-label">Our blog</span>
            <h2 className="blog-title">Latest blog posts</h2>
            <p className="blog-subtitle">
              Tool and strategies modern teams need to help their companies grow.
            </p>
          </div>
          <button className="view-all-posts">View all posts</button>
        </div>
  
  {/* Blog Cards */}
  <div className="blog-grid">
  {blogData.map((post, index) => (
            <article key={index} className="blog-card">
              <div className="blog-card-image">
                <img src={post.image} alt={post.title} />
              </div>
              <div className="blog-card-content">
                <div className="blog-card-category">{post.category}</div>
                <h3 className="blog-card-title">
                  {post.title}
                  <svg className="arrow-icon" width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M1 11L11 1M11 1H1M11 1V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </h3>
                <p className="blog-card-description">{post.description}</p>
                <div className="blog-card-footer">
                  <div className="blog-author">
                    <img src={post.author.image} alt={post.author.name} className="author-image" />
                    <span className="author-name">{post.author.name}</span>
                  </div>
                  <span className="blog-date">{post.date}</span>
                </div>
              </div>
            </article>
    ))}
    
  </div>
  
  {/* View all posts button */}
 
</div>
<div className="free-trial-section">
        <h1 className="free-trial-heading">Start your free trial</h1>
        <p className="free-trial-subheading">
          Join over 4,000+ startups already growing with Untitled.
        </p>
        <div className="free-trial-buttons">
          <button className="learn-more-btn">Learn more</button>
          <button className="get-started-btn">Get started</button>
        </div>
      </div>
      </div>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-grid">
            {/* Product Column */}
            <div className="footer-column">
              <h3>Product</h3>
              <ul>
                <li>Overview</li>
                <li>Features</li>
                <li>Solutions <span className="new-badge">New</span></li>
                <li>Tutorials</li>
                <li>Pricing</li>
                <li>Releases</li>
              </ul>
            </div>

            {/* Company Column */}
            <div className="footer-column">
              <h3>Company</h3>
              <ul>
                <li>About us</li>
                <li>Careers</li>
                <li>Press</li>
                <li>News</li>
                <li>Media kit</li>
                <li>Contact</li>
              </ul>
            </div>

            {/* Resources Column */}
            <div className="footer-column">
              <h3>Resources</h3>
              <ul>
                <li>Blog</li>
                <li>Newsletter</li>
                <li>Events</li>
                <li>Help centre</li>
                <li>Tutorials</li>
                <li>Support</li>
              </ul>
            </div>

            {/* Use cases Column */}
            <div className="footer-column">
              <h3>Use cases</h3>
              <ul>
                <li>Startups</li>
                <li>Enterprise</li>
                <li>Government</li>
                <li>SaaS centre</li>
                <li>Marketplaces</li>
                <li>Ecommerce</li>
              </ul>
            </div>

            {/* Social Column */}
            <div className="footer-column">
              <h3>Social</h3>
              <ul>
                <li>Twitter</li>
                <li>LinkedIn</li>
                <li>Facebook</li>
                <li>GitHub</li>
                <li>AngelList</li>
                <li>Dribbble</li>
              </ul>
            </div>

            {/* Legal Column */}
            <div className="footer-column">
              <h3>Legal</h3>
              <ul>
                <li>Terms</li>
                <li>Privacy</li>
                <li>Cookies</li>
                <li>Licenses</li>
                <li>Settings</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom">
            <div className="footer-logo">
            <div className="profile">
          <img src="/src/assets/logo.png" alt="logo" className="logo-image" />
        </div>
            </div>
            <p className="copyright">© 2077 zysktechnologies. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </section>
    
  );
};

export default HeroSection;
