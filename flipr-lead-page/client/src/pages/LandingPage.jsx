import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import ClientCard from "../components/ClientCard";

const LandingPage = () => {

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
<section style={{ padding: "40px 20px" }}>
  <h2>Contact Us</h2>

  <form>
    <input type="text" placeholder="Full Name" /><br /><br />
    <input type="email" placeholder="Email Address" /><br /><br />
    <input type="text" placeholder="Mobile Number" /><br /><br />
    <input type="text" placeholder="City" /><br /><br />
    <button type="submit">Submit</button>
  </form>
</section>
{/* NEWSLETTER SECTION */}
<section style={{ padding: "40px 20px" }}>
  <h3>Subscribe to our Newsletter</h3>
  <input type="email" placeholder="Enter your email" />
  <button>Subscribe</button>
</section>


    </div>
  );
};

export default LandingPage;
