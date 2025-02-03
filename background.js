chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.set({email: 'photos@terry-harris.com'});
  });
  