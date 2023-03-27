let queryStore = '';

chrome.runtime.onMessage.addListener(async (payload, sender, sendResponse) => {
  const { name, query } = payload;
  switch (name) {
    case 'set-query':
      queryStore = query;
      break;
    case 'get-query':
      sendResponse({query: queryStore});
  }
  return true;
});
