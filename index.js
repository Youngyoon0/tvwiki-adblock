document.documentElement.style.border = '5px solid red';

Object.defineProperty(navigator, 'userAgent', {
  get: function () {
    return 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36';
  }
});

if (window.location.hostname === '실제도메인.com') {
  window.location.replace('https://xn--hq1bm8j30h9zemxa.com' + window.location.pathname);
}

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
