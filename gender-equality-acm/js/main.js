window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js');
  }

  // Check for network connection
  function isOnline() {
    return navigator.onLine;
  }

  // Update UI based on network connection
  function updateNetworkStatus() {
    const statusElement = document.getElementById('network-status');
    if (isOnline()) {
      statusElement.textContent = 'Online';
      statusElement.classList.remove('offline');
    } else {
      statusElement.textContent = 'Offline';
      statusElement.classList.add('offline');
    }
  }

  window.addEventListener('online', updateNetworkStatus);
  window.addEventListener('offline', updateNetworkStatus);

  // Initial check of network status
  updateNetworkStatus();
}
