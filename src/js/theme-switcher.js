const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themeSwitcherRef = document.getElementById('theme-switch-toggle');

if (!currentTheme) {
  localStorage.setItem('theme', Theme.LIGHT);
}

const currentTheme = localStorage.getItem('theme');

if (currentTheme === Theme.DARK) {
  themeSwitcherRef.checked = true;
}

document.body.classList.add(currentTheme);

themeSwitcherRef.addEventListener('click', onThemeSwitcherChange);

function onThemeSwitcherChange() {
  if (document.body.classList.contains(Theme.LIGHT)) {
    document.body.classList.remove(Theme.LIGHT);
    document.body.classList.add(Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
    return;
  }

  document.body.classList.remove(Theme.DARK);
  document.body.classList.add(Theme.LIGHT);
  localStorage.setItem('theme', Theme.LIGHT);
}
