/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

window.onload = function() {
  setTimeout(loadCrashes, 0);
}

function loadCrashes() {
  if (navigator.getDeviceStorage) {
    var storage = navigator.getDeviceStorage("apps");
    if (storage) {
      var getRequest = storage.get("b2g/mozilla/Crash\ Reports/submitted");

      getRequest.onsuccess = function() {
        document.getElementById("error").textContent = "got access";
      };
      getRequest.onerror = function() {
        var errmsg = getRequest.error && getRequest.error.name;
        document.getElementById("error").textContent = errmsg;
      };
    }
    else {
      document.getElementById("error").textContent = "apps storage not available";
    }
  }
  else {
    document.getElementById("error").textContent = "no device storage";
  }
}
