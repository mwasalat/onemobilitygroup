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

const TermsContent = () => {
  return (
    <div className="pt-120 pb-120" style={{ background: "#fff" }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <p style={{ ...paragraphStyle, marginBottom: "2rem" }}>
              <strong>Last updated:</strong> February 2025. Please read these Terms of Use carefully before using the website and services of One Mobility Group (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;). By accessing or using our website or services, you agree to be bound by these terms.
            </p>

            <div style={legalSectionStyle}>
              <h4 style={headingStyle}>1. Acceptance of Terms</h4>
              <p style={paragraphStyle}>
                By accessing or using the One Mobility Group website and any related services (including information about auto rental, taxi, public and school transport, automobile trading, service center, and technology solutions), you agree to comply with and be bound by these Terms of Use and our Privacy Policy. If you do not agree, please do not use our website or services.
              </p>
            </div>

            <div style={legalSectionStyle}>
              <h4 style={headingStyle}>2. Use of the Website</h4>
              <p style={paragraphStyle}>
                You may use our website for lawful purposes only. You must not use it in any way that violates applicable laws, infringes the rights of others, or disrupts the operation or security of our systems. You may not scrape, frame, or use automated means to access our site without our prior written consent.
              </p>
            </div>

            <div style={legalSectionStyle}>
              <h4 style={headingStyle}>3. Intellectual Property</h4>
              <p style={paragraphStyle}>
                All content on this website (including text, graphics, logos, images, and software) is the property of One Mobility Group or its licensors and is protected by intellectual property laws. You may not copy, modify, distribute, or use such content for commercial purposes without our written permission.
              </p>
            </div>

            <div style={legalSectionStyle}>
              <h4 style={headingStyle}>4. Services and Information</h4>
              <p style={paragraphStyle}>
                Information on this website about our services (e.g. auto rental, taxi, transport, fleet solutions) is for general information only. Specific terms, availability, and pricing for actual services are subject to separate agreements and may vary. We do not guarantee that all information on the site is current or error-free.
              </p>
            </div>

            <div style={legalSectionStyle}>
              <h4 style={headingStyle}>5. Disclaimers</h4>
              <p style={paragraphStyle}>
                Our website and content are provided &quot;as is&quot; without warranties of any kind, express or implied. We do not warrant that the site will be uninterrupted, secure, or free of errors. Use of the website and reliance on its content is at your own risk.
              </p>
            </div>

            <div style={legalSectionStyle}>
              <h4 style={headingStyle}>6. Limitation of Liability</h4>
              <p style={paragraphStyle}>
                To the fullest extent permitted by law, One Mobility Group and its affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the website or any services, or from any inability to use them. Our total liability shall not exceed the amount you paid to us, if any, in the twelve months preceding the claim.
              </p>
            </div>

            <div style={legalSectionStyle}>
              <h4 style={headingStyle}>7. Links to Third-Party Sites</h4>
              <p style={paragraphStyle}>
                Our website may contain links to third-party websites. We do not control and are not responsible for the content or practices of those sites. Inclusion of a link does not imply endorsement. Your use of third-party sites is at your own risk.
              </p>
            </div>

            <div style={legalSectionStyle}>
              <h4 style={headingStyle}>8. Modifications</h4>
              <p style={paragraphStyle}>
                We may modify these Terms of Use at any time. Changes will be effective when posted on this page with an updated &quot;Last updated&quot; date. Your continued use of the website after changes constitutes acceptance of the revised terms.
              </p>
            </div>

            <div style={legalSectionStyle}>
              <h4 style={headingStyle}>9. Governing Law</h4>
              <p style={paragraphStyle}>
                These Terms of Use shall be governed by and construed in accordance with the laws of the United Arab Emirates (and the Emirate of Abu Dhabi where applicable), without regard to conflict of law principles. Any disputes shall be subject to the exclusive jurisdiction of the courts of Abu Dhabi.
              </p>
            </div>

            <div style={legalSectionStyle}>
              <h4 style={headingStyle}>10. Contact</h4>
              <p style={paragraphStyle}>
                For questions about these Terms of Use, please contact us at{" "}
                <a href="mailto:info@onemobilitygroup.com">info@onemobilitygroup.com</a> or via our{" "}
                <a href="/contact">Contact</a> page. One Mobility Group, 9GG9+5P3 Musaffah – M2 – Abu Dhabi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsContent;
