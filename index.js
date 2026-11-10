window.open = function() { return null; };

function removeAds() {
  const selectors = [
    'ul#bannerList.banner2',
    '#bannerList',
    '.banner2',
    '.full pc-only',
    '.full mobile-only',
    'iframe',
    '[class*="banner"]',
    '[id*="banner"]',
    '[class*="ad-"]',
    '[id*="ad-"]',
    '.popup',
    '#popup'
  ];
  selectors.forEach(selector => {
    document.querySelectorAll(selector).forEach(el => {
      el.style.setProperty('display', 'none', 'important');
    });
  });
}

removeAds();
const observer = new MutationObserver(removeAds);
observer.observe(document.documentElement, { childList: true, subtree: true });

document.addEventListener('keydown', function(e) {
  if (e.keyCode === 10009) {
    e.preventDefault();
    if (window.history.length > 1) {
      window.history.back();
    }
  }
});
