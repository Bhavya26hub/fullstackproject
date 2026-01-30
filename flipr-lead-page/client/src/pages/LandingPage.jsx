import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import ClientCard from "../components/ClientCard";
import { useState } from "react";

const LandingPage = () => {
  const [contactForm, setContactForm] = useState({ fullName: "", email: "", mobile: "", city: "" });
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [newsletterMessage, setNewsletterMessage] = useState("");

  // ✅ PROJECT DATA
  const projects = [
    {
      image: "/assets/images/logo.png",
      name: "Project Alpha",
      description: "A sample project description"
    },
    {
      image: "/assets/images/logo.png",
      name: "Project Beta",
      description: "Another project description"
    }
  ];

  // ✅ CLIENT DATA (MOVE IT HERE)
  const clients = [
    {
      image: "/assets/images/logo.png",
      name: "John Doe",
      description: "Amazing service and great support!",
      designation: "CEO"
    },
    {
      image: "/assets/images/logo.png",
      name: "Jane Smith",
      description: "Loved the product quality.",
      designation: "Product Manager"
    }
  ];

  return (
    <div>
      <Navbar />

      {/* HERO SECTION */}
      <section style={{ padding: "60px 20px" }}>
        <h1>We Build Amazing Digital Products</h1>
        <p>
          We help startups and businesses build scalable and user-friendly applications.
        </p>
      </section>

      {/* OUR PROJECTS */}
      <section style={{ padding: "40px 20px" }}>
        <h2>Our Projects</h2>
        <div style={{ display: "flex", gap: "20px" }}>
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} />
          ))}
        </div>
      </section>

      {/* ✅ HAPPY CLIENTS (THIS WAS MISSING) */}
      <section style={{ padding: "40px 20px" }}>
        <h2>Happy Clients</h2>
        <div style={{ display: "flex", gap: "20px" }}>
          {clients.map((c, i) => (
            <ClientCard key={i} client={c} />
          ))}
        </div>
      </section>
      {/* CONTACT FORM SECTION */}
<section style={{ padding: "40px 20px", backgroundColor: "#f9f9f9", borderRadius: "8px", margin: "20px 0" }}>
  <h2>Contact Us</h2>
  {contactMessage && <p style={{ color: contactMessage.includes("successfully") ? "green" : "red", fontSize: "16px", fontWeight: "bold" }}>{contactMessage}</p>}
  <form onSubmit={async (e) => {
    e.preventDefault();
    try {
      console.log('📤 Submitting contact form:', contactForm);
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contactForm)
      });
      console.log('Response status:', res.status);
      const data = await res.json();
      console.log('Response data:', data);
      if (res.ok) {
        setContactMessage("✅ Message sent successfully!");
        setContactForm({ fullName: "", email: "", mobile: "", city: "" });
        console.log("✅ Contact saved:", data);
        setTimeout(() => setContactMessage(""), 3000);
      } else {
        setContactMessage("❌ Error: " + data.error);
      }
    } catch (err) {
      console.error("❌ Submission error:", err);
      setContactMessage("❌ Error: " + err.message);
    }
  }} style={{ display: "flex", flexDirection: "column", maxWidth: "500px", gap: "12px" }}>
    <input 
      type="text" 
      placeholder="Full Name" 
      value={contactForm.fullName}
      onChange={(e) => setContactForm({...contactForm, fullName: e.target.value})}
      required
      style={{ padding: "10px", border: "1px solid #ddd", borderRadius: "4px", fontSize: "14px" }}
    />
    <input 
      type="email" 
      placeholder="Email Address" 
      value={contactForm.email}
      onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
      required
      style={{ padding: "10px", border: "1px solid #ddd", borderRadius: "4px", fontSize: "14px" }}
    />
    <input 
      type="text" 
      placeholder="Mobile Number" 
      value={contactForm.mobile}
      onChange={(e) => setContactForm({...contactForm, mobile: e.target.value})}
      style={{ padding: "10px", border: "1px solid #ddd", borderRadius: "4px", fontSize: "14px" }}
    />
    <input 
      type="text" 
      placeholder="City" 
      value={contactForm.city}
      onChange={(e) => setContactForm({...contactForm, city: e.target.value})}
      style={{ padding: "10px", border: "1px solid #ddd", borderRadius: "4px", fontSize: "14px" }}
    />
    <button type="submit" style={{ padding: "12px", backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "4px", cursor: "pointer", fontSize: "16px", fontWeight: "bold" }}>Submit</button>
  </form>
</section>
{/* NEWSLETTER SECTION */}
<section style={{ padding: "40px 20px", backgroundColor: "#e8f4f8", borderRadius: "8px", margin: "20px 0" }}>
  <h3>Subscribe to our Newsletter</h3>
  {newsletterMessage && <p style={{ color: newsletterMessage.includes("successfully") ? "green" : "red", fontSize: "16px", fontWeight: "bold" }}>{newsletterMessage}</p>}
  <form onSubmit={async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: newsletterEmail })
      });
      const data = await res.json();
      if (res.ok) {
        setNewsletterMessage("✅ Subscribed successfully!");
        setNewsletterEmail("");
        console.log("Saved subscription:", data);
        setTimeout(() => setNewsletterMessage(""), 3000);
      } else {
        setNewsletterMessage("❌ Error: " + data.error);
      }
    } catch (err) {
      setNewsletterMessage("❌ Error: " + err.message);
    }
  }} style={{ display: "flex", gap: "10px", maxWidth: "400px" }}>
    <input 
      type="email" 
      placeholder="Enter your email" 
      value={newsletterEmail}
      onChange={(e) => setNewsletterEmail(e.target.value)}
      required
      style={{ flex: 1, padding: "10px", border: "1px solid #ddd", borderRadius: "4px", fontSize: "14px" }}
    />
    <button type="submit" style={{ padding: "10px 20px", backgroundColor: "#28a745", color: "white", border: "none", borderRadius: "4px", cursor: "pointer", fontSize: "14px", fontWeight: "bold" }}>Subscribe</button>
  </form>
</section>


    </div>
  );
};

export default LandingPage;
