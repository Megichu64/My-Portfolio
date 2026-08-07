const toggleBtn = document.getElementById('theme-toggle');

toggleBtn.addEventListener('click', () => {
  // Check current theme on <html>
  const currentTheme = document.documentElement.getAttribute('data-theme');
  
  // Switch between dark and light
  if (currentTheme === 'dark') {
    document.documentElement.removeAttribute('data-theme');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
});