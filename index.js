/* from ChatGPT - JavaScript for Interactive Behavior */

document.addEventListener('DOMContentLoaded', () => {
    const languageButton = document.querySelector('.nav__language-button');
    const languageMenu = document.getElementById('language-menu');
  
    // Toggle Menu Visibility
    languageButton.addEventListener('click', () => {
      const isExpanded = languageButton.getAttribute('aria-expanded') === 'true';
      
      // Update ARIA attributes and toggle visibility
      languageButton.setAttribute('aria-expanded', !isExpanded);
      languageMenu.classList.toggle('hidden', isExpanded);
  
      // Focus on the first language option when menu opens
      if (!isExpanded) {
        const firstLanguageOption = languageMenu.querySelector('[role="menuitem"] a');
        firstLanguageOption.focus();
      }
    });
  
    // Close menu when clicking outside
    document.addEventListener('click', (event) => {
      if (!languageMenu.contains(event.target) && !languageButton.contains(event.target)) {
        languageMenu.classList.add('hidden');
        languageButton.setAttribute('aria-expanded', 'false');
      }
    });
  
    // Close menu with Escape key
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && !languageMenu.classList.contains('hidden')) {
        languageMenu.classList.add('hidden');
        languageButton.setAttribute('aria-expanded', 'false');
        languageButton.focus();
      }
    });
  });


// original
// Add event listeners to nav menu buttons
const mobileMenu = document.querySelector('.nav__mobile-nav');
const openMenuBtn = document.querySelector('.nav__menu-button--open');
const closeMenuBtn = document.querySelector('.nav__menu-button--close');

if (mobileMenu && openMenuBtn) {
  const openMenu = () => {
    mobileMenu.classList.remove('hidden');

    // Freeze body scroll
    document.body.classList.add('scroll-freeze');
  };
  openMenuBtn.addEventListener('click', openMenu);
}

if (mobileMenu && closeMenuBtn) {
  const closeMenu = () => {
    mobileMenu.classList.add('hidden');

    // Defreeze body scroll
    document.body.classList.remove('scroll-freeze');
  };
  closeMenuBtn.addEventListener('click', closeMenu);

  const closeMenuOnClickOutside = (e) => {
    // Close the menu if the user is clicking on the mobile menu but not the inner menu
    if (e.target === mobileMenu) closeMenu();
  };
  mobileMenu.addEventListener('click', closeMenuOnClickOutside);

  // Trap focus when mobile nav is open
  const firstFocusableElement = closeMenuBtn;
  const lastFocusableElement = mobileMenu.querySelector('.nav__link--donate a'); // get last element to be focused inside modal

  mobileMenu.addEventListener('keydown', function (e) {
    let isTabPressed = e.key === 'Tab';

    if (!isTabPressed) {
      return;
    }

    if (e.shiftKey) {
      // if shift key pressed for shift + tab combination
      if (document.activeElement === firstFocusableElement) {
        lastFocusableElement.focus(); // add focus for the last focusable element
        e.preventDefault();
      }
    } else {
      // if tab key is pressed
      if (document.activeElement === lastFocusableElement) {
        // if focused has reached to last focusable element then focus first focusable element after pressing tab
        firstFocusableElement.focus(); // add focus for the first focusable element
        e.preventDefault();
      }
    }
  });
}

// Add event listeners to nav language switcher
const languageBtn = document.querySelector('.nav__language-button');
const languageList = document.querySelector('.nav__language-list');
if (languageBtn && languageList) {
  const toggleList = () => {
    languageList.classList.toggle('hidden');
  };
  languageBtn.addEventListener('click', toggleList);

  const closeLanguageOnClickOutside = (e) => {
    if (e.target !== languageBtn && e.target !== languageList) {
      languageList.classList.add('hidden');
    }
  };
  document.body.addEventListener('click', closeLanguageOnClickOutside);
}