const toggleBtn = document.getElementById('theme-toggle');

toggleBtn.addEventListener('click', () => {
  // Check current theme on <html>
  const currentTheme = document.documentElement.getAttribute('data-theme');
  
  // Switch between dark and light
  if (currentTheme === 'dark') {
    // Switch to Light Mode
    document.documentElement.setAttribute('data-theme', 'light');
    toggleBtn.textContent = '🌙 Dark Mode';
  } else {
    // Switch to Dark Mode
    document.documentElement.setAttribute('data-theme', 'dark');
    toggleBtn.textContent = '☀️ Light Mode';
  }
});