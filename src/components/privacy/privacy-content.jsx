import React from "react";

const legalSectionStyle = {
  marginBottom: "2rem",
};
const headingStyle = {
  fontSize: "1.35rem",
  fontWeight: "700",
  color: "#001f3f",
  marginBottom: "0.75rem",
};
const paragraphStyle = {
  color: "#555",
  lineHeight: "1.8",
  marginBottom: "1rem",
};

const PrivacyContent = () => {
  return (
    <div className="pt-120 pb-120" style={{ background: "#fff" }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <p style={{ ...paragraphStyle, marginBottom: "2rem" }}>
              <strong>Last updated:</strong> February 2025. One Mobility Group (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website or engage with our transportation and mobility services.
            </p>

            <div style={legalSectionStyle}>
              <h4 style={headingStyle}>1. Information We Collect</h4>
              <p style={paragraphStyle}>
                We may collect information you provide directly (e.g. when you contact us, request a quote, or use our contact form), including name, email address, phone number, company name, and message content. We may also collect information automatically when you visit our website, such as IP address, browser type, device information, and usage data through cookies and similar technologies.
              </p>
            </div>

            <div style={legalSectionStyle}>
              <h4 style={headingStyle}>2. How We Use Your Information</h4>
              <p style={paragraphStyle}>
                We use the information we collect to respond to your inquiries, provide our services (including auto rental, taxi, public and school transport, and related mobility solutions), improve our website and services, send relevant updates where you have agreed, and comply with legal obligations.
              </p>
            </div>

            <div style={legalSectionStyle}>
              <h4 style={headingStyle}>3. Cookies and Tracking</h4>
              <p style={paragraphStyle}>
                Our website may use cookies and similar technologies to improve functionality, analyze traffic, and personalize content. You can manage cookie preferences through your browser settings.
              </p>
            </div>

            <div style={legalSectionStyle}>
              <h4 style={headingStyle}>4. Sharing and Disclosure</h4>
              <p style={paragraphStyle}>
                We do not sell your personal information. We may share your information with trusted service providers who assist our operations (e.g. hosting, analytics), with authorities when required by law, or in connection with a business transfer, always in line with applicable law.
              </p>
            </div>

            <div style={legalSectionStyle}>
              <h4 style={headingStyle}>5. Data Retention and Security</h4>
              <p style={paragraphStyle}>
                We retain your information only as long as necessary for the purposes described in this policy or as required by law. We implement appropriate technical and organizational measures to protect your data against unauthorized access, loss, or misuse.
              </p>
            </div>

            <div style={legalSectionStyle}>
              <h4 style={headingStyle}>6. Your Rights</h4>
              <p style={paragraphStyle}>
                Depending on your location, you may have rights to access, correct, delete, or restrict the processing of your personal data, or to object to certain processing. To exercise these rights or ask questions about your data, please contact us using the details below.
              </p>
            </div>

            <div style={legalSectionStyle}>
              <h4 style={headingStyle}>7. Third-Party Links</h4>
              <p style={paragraphStyle}>
                Our website may contain links to third-party sites. We are not responsible for the privacy practices of those sites. We encourage you to read their privacy policies.
              </p>
            </div>

            <div style={legalSectionStyle}>
              <h4 style={headingStyle}>8. Changes to This Policy</h4>
              <p style={paragraphStyle}>
                We may update this Privacy Policy from time to time. The &quot;Last updated&quot; date at the top will be revised when changes are made. Continued use of our website or services after changes constitutes acceptance of the updated policy.
              </p>
            </div>

            <div style={legalSectionStyle}>
              <h4 style={headingStyle}>9. Contact Us</h4>
              <p style={paragraphStyle}>
                For any privacy-related questions or requests, please contact us at{" "}
                <a href="mailto:info@onemobilitygroup.com">info@onemobilitygroup.com</a> or visit our{" "}
                <a href="/contact">Contact</a> page. One Mobility Group, 9GG9+5P3 Musaffah – M2 – Abu Dhabi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyContent;
