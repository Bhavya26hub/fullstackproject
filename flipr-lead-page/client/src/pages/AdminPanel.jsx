import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminPanel = () => {
  const [contacts, setContacts] = useState([]);
  const [newsletters, setNewsletters] = useState([]);
  const [activeTab, setActiveTab] = useState("contacts");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    console.log('📌 AdminPanel mounted - fetching initial data');
    fetchData();
    // Auto-refresh every 2 seconds for real-time updates
    const interval = setInterval(fetchData, 2000);
    return () => clearInterval(interval);
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      console.log('🔄 Fetching contacts from: http://localhost:5000/api/contact');
      const contactRes = await fetch("http://localhost:5000/api/contact");
      console.log('Contact response status:', contactRes.status);
      
      console.log('🔄 Fetching newsletter from: http://localhost:5000/api/newsletter');
      const newsletterRes = await fetch("http://localhost:5000/api/newsletter");
      console.log('Newsletter response status:', newsletterRes.status);
      
      if (contactRes.ok) {
        const contactData = await contactRes.json();
        console.log('✅ Contacts data received:', contactData);
        setContacts(Array.isArray(contactData) ? contactData : []);
      } else {
        console.error('❌ Contact fetch failed:', contactRes.statusText);
      }
      
      if (newsletterRes.ok) {
        const newsletterData = await newsletterRes.json();
        console.log('✅ Newsletter data received:', newsletterData);
        setNewsletters(Array.isArray(newsletterData) ? newsletterData : []);
      } else {
        console.error('❌ Newsletter fetch failed:', newsletterRes.statusText);
      }
    } catch (err) {
      console.error("❌ Error fetching data:", err);
      alert('Error fetching data: ' + err.message);
    }
    setLoading(false);
  };

  const deleteContact = async (id) => {
    if (!window.confirm("Are you sure you want to delete this contact?")) return;
    try {
      const res = await fetch(`http://localhost:5000/api/contact/${id}`, { method: "DELETE" });
      if (res.ok) {
        setContacts(contacts.filter(c => c._id !== id));
      }
    } catch (err) {
      console.error("Error deleting contact:", err);
    }
  };

  const deleteNewsletter = async (id) => {
    if (!window.confirm("Are you sure you want to delete this subscriber?")) return;
    try {
      const res = await fetch(`http://localhost:5000/api/newsletter/${id}`, { method: "DELETE" });
      if (res.ok) {
        setNewsletters(newsletters.filter(n => n._id !== id));
      }
    } catch (err) {
      console.error("Error deleting subscriber:", err);
    }
  };

  const styles = {
    container: {
      padding: "20px",
      maxWidth: "1200px",
      margin: "0 auto",
      fontFamily: "Arial, sans-serif"
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "30px",
      borderBottom: "2px solid #007bff",
      paddingBottom: "15px"
    },
    title: {
      fontSize: "28px",
      fontWeight: "bold",
      color: "#333"
    },
    backBtn: {
      padding: "10px 20px",
      backgroundColor: "#6c757d",
      color: "white",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      fontSize: "14px",
      fontWeight: "bold"
    },
    tabs: {
      display: "flex",
      gap: "10px",
      marginBottom: "20px"
    },
    tab: {
      padding: "10px 20px",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      fontSize: "14px",
      fontWeight: "bold",
      backgroundColor: "#e9ecef",
      color: "#333"
    },
    activeTab: {
      padding: "10px 20px",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      fontSize: "14px",
      fontWeight: "bold",
      backgroundColor: "#007bff",
      color: "white"
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      marginTop: "20px",
      backgroundColor: "white",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      borderRadius: "4px",
      overflow: "hidden"
    },
    th: {
      backgroundColor: "#f8f9fa",
      padding: "12px",
      textAlign: "left",
      fontWeight: "bold",
      borderBottom: "2px solid #dee2e6",
      color: "#333"
    },
    td: {
      padding: "12px",
      borderBottom: "1px solid #dee2e6",
      color: "#555"
    },
    trEven: {
      backgroundColor: "#f8f9fa"
    },
    deleteBtn: {
      padding: "6px 12px",
      backgroundColor: "#dc3545",
      color: "white",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      fontSize: "12px",
      fontWeight: "bold"
    },
    emptyMsg: {
      textAlign: "center",
      padding: "40px",
      color: "#999",
      fontSize: "16px"
    },
    stats: {
      display: "flex",
      gap: "20px",
      marginBottom: "30px"
    },
    statCard: {
      padding: "20px",
      backgroundColor: "#007bff",
      color: "white",
      borderRadius: "8px",
      flex: 1,
      textAlign: "center"
    },
    statNumber: {
      fontSize: "32px",
      fontWeight: "bold",
      margin: "10px 0"
    },
    statLabel: {
      fontSize: "14px",
      opacity: 0.9
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Admin Panel</h1>
        <button style={styles.backBtn} onClick={() => navigate("/")}>← Back to Home</button>
      </div>

      <div style={styles.stats}>
        <div style={styles.statCard}>
          <div style={styles.statLabel}>Total Contacts</div>
          <div style={styles.statNumber}>{contacts.length}</div>
        </div>
        <div style={{...styles.statCard, backgroundColor: "#28a745"}}>
          <div style={styles.statLabel}>Newsletter Subscribers</div>
          <div style={styles.statNumber}>{newsletters.length}</div>
        </div>
      </div>

      <div style={styles.tabs}>
        <button 
          style={activeTab === "contacts" ? styles.activeTab : styles.tab}
          onClick={() => setActiveTab("contacts")}
        >
          📧 Contacts ({contacts.length})
        </button>
        <button 
          style={activeTab === "newsletter" ? styles.activeTab : styles.tab}
          onClick={() => setActiveTab("newsletter")}
        >
          📰 Newsletter ({newsletters.length})
        </button>
        <button 
          style={styles.tab}
          onClick={fetchData}
        >
          🔄 Refresh
        </button>
      </div>

      {loading && <p style={{ textAlign: "center", fontSize: "16px", color: "#007bff" }}>Loading...</p>}

      {activeTab === "contacts" && (
        <div>
          <h2>Contact Form Submissions ({contacts.length})</h2>
          {contacts.length === 0 ? (
            <div style={styles.emptyMsg}>
              <p>No contacts yet</p>
              <p style={{ fontSize: "12px", color: "#ccc" }}>Contacts submitted from the landing page will appear here</p>
            </div>
          ) : (
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>#</th>
                  <th style={styles.th}>Full Name</th>
                  <th style={styles.th}>Email</th>
                  <th style={styles.th}>Mobile</th>
                  <th style={styles.th}>City</th>
                  <th style={styles.th}>Submitted Date</th>
                  <th style={styles.th}>Time</th>
                  <th style={styles.th}>Action</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((contact, idx) => {
                  const dateObj = new Date(contact.createdAt);
                  return (
                    <tr key={contact._id} style={idx % 2 === 0 ? styles.trEven : {}}>
                      <td style={styles.td}>{idx + 1}</td>
                      <td style={styles.td}><strong>{contact.fullName}</strong></td>
                      <td style={styles.td}>{contact.email}</td>
                      <td style={styles.td}>{contact.mobile || "N/A"}</td>
                      <td style={styles.td}>{contact.city || "N/A"}</td>
                      <td style={styles.td}>{dateObj.toLocaleDateString()}</td>
                      <td style={styles.td}>{dateObj.toLocaleTimeString()}</td>
                      <td style={styles.td}>
                        <button 
                          style={styles.deleteBtn}
                          onClick={() => deleteContact(contact._id)}
                        >
                          🗑️ Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      )}

      {activeTab === "newsletter" && (
        <div>
          <h2>Newsletter Subscribers ({newsletters.length})</h2>
          {newsletters.length === 0 ? (
            <div style={styles.emptyMsg}>
              <p>No subscribers yet</p>
              <p style={{ fontSize: "12px", color: "#ccc" }}>Newsletter signups will appear here</p>
            </div>
          ) : (
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>#</th>
                  <th style={styles.th}>Email Address</th>
                  <th style={styles.th}>Subscribed Date</th>
                  <th style={styles.th}>Subscribed Time</th>
                  <th style={styles.th}>Action</th>
                </tr>
              </thead>
              <tbody>
                {newsletters.map((sub, idx) => {
                  const dateObj = new Date(sub.createdAt);
                  return (
                    <tr key={sub._id} style={idx % 2 === 0 ? styles.trEven : {}}>
                      <td style={styles.td}>{idx + 1}</td>
                      <td style={styles.td}><strong>{sub.email}</strong></td>
                      <td style={styles.td}>{dateObj.toLocaleDateString()}</td>
                      <td style={styles.td}>{dateObj.toLocaleTimeString()}</td>
                      <td style={styles.td}>
                        <button 
                          style={styles.deleteBtn}
                          onClick={() => deleteNewsletter(sub._id)}
                        >
                          🗑️ Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
