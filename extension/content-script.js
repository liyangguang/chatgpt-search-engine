(function start() {
  switch (location.origin) {
    case 'https://chatgpt-search-engine.vercel.app':
      runSearchPage();
      break;
    case 'https://chat.openai.com':
      runChatPage();
      break;
  }
})();

async function runSearchPage() {
  const input = await _waitForElm('input');
  const query = input.value;
  if (!query) return;
  chrome.runtime.sendMessage(undefined, {name: 'set-query', query});
  location.replace('https://chat.openai.com/chat');
}

async function runChatPage() {
  chrome.runtime.sendMessage(undefined, {name: 'get-query'}, undefined, async (response) => {
    const newChatButton = await _waitForElm('nav a');
    newChatButton.click();
    await _waitTime();
    const inputEl = await _waitForElm('textarea');
    inputEl.value = response?.query || '';
    await _waitTime();
    document.querySelector('textarea + button').click();
  });
}

function _waitForElm(selector) {
  return new Promise(resolve => {
      if (document.querySelector(selector)) {
          return resolve(document.querySelector(selector));
      }

      const observer = new MutationObserver(mutations => {
          if (document.querySelector(selector)) {
              resolve(document.querySelector(selector));
              observer.disconnect();
          }
      });

      observer.observe(document.body, {
          childList: true,
          subtree: true
      });
  });
}

function _waitTime(milliseconds = 500) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(milliseconds);
    }, milliseconds)
  })
}
