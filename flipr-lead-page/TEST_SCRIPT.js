// Quick Test Script to Check Connection
// Paste this in browser DevTools Console on http://localhost:5173/admin

console.log('%c🔍 TESTING BACKEND CONNECTION', 'font-size: 16px; color: blue; font-weight: bold;');

// Test 1: Check if backend is reachable
fetch('http://localhost:5000/api/contact')
  .then(res => {
    console.log('%c✅ Backend is REACHABLE', 'font-size: 14px; color: green; font-weight: bold;');
    console.log('Status:', res.status);
    return res.json();
  })
  .then(data => {
    console.log('%c📊 Current Contacts in Database:', 'font-size: 14px; color: orange; font-weight: bold;');
    console.log(data);
    console.log('Total contacts:', data.length);
  })
  .catch(err => {
    console.log('%c❌ ERROR - Backend is NOT reachable', 'font-size: 14px; color: red; font-weight: bold;');
    console.error('Error:', err.message);
  });

// Test 2: Check newsletter data
fetch('http://localhost:5000/api/newsletter')
  .then(res => res.json())
  .then(data => {
    console.log('%c📰 Current Newsletter Subscribers:', 'font-size: 14px; color: orange; font-weight: bold;');
    console.log(data);
    console.log('Total subscribers:', data.length);
  })
  .catch(err => console.error('Newsletter fetch error:', err));
