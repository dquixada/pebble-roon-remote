var DEFAULT_IP = "192.168.1.50"; 
var DEFAULT_PORT = "3000";
var CONFIG_URL = "data:text/html;base64,PCFET0NUWVBFIGh0bWw+CjxodG1sPgo8aGVhZD4KICA8bWV0YSBjaGFyc2V0PSJ1dGYtOCI+CiAgPG1ldGEgbmFtZT0idmlld3BvcnQiIGNvbnRlbnQ9IndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xIj4KICA8dGl0bGU+Um9vbiBSZW1vdGUgU2V0dGluZ3M8L3RpdGxlPgogIDxzdHlsZT4KICAgIGJvZHkgeyBmb250LWZhbWlseTogc2Fucy1zZXJpZjsgcGFkZGluZzogMjBweDsgYmFja2dyb3VuZDogIzIyMjsgY29sb3I6ICNlZWU7IH0KICAgIGxhYmVsIHsgZGlzcGxheTogYmxvY2s7IG1hcmdpbi1ib3R0b206IDEwcHg7IGZvbnQtd2VpZ2h0OiBib2xkOyB9CiAgICBpbnB1dCB7IHdpZHRoOiAxMDAlOyBwYWRkaW5nOiAxMHB4OyBtYXJnaW4tYm90dG9tOiAyMHB4OyBib3JkZXItcmFkaXVzOiA1cHg7IGJvcmRlcDogbm9uZTsgfQogICAgYnV0dG9uIHsgd2lkdGg6IDEwMCU7IHBhZGRpbmc6IDE1cHg7IGJhY2tncm91bmQ6ICNmZjU3MjI7IGNvbG9yOiB3aGl0ZTsgYm9yZGVyOiBub25lOyBib3JkZXItcmFkaXVzOiA1cHg7IGZvbnQtc2l6ZTogMTZweDsgY3Vyc29yOiBwb2ludGVyOyB9CiAgPC9zdHlsZT4KPC9oZWFkPgo8Ym9keT4KICA8aDI+Um9vbiBTZXR0aW5nczwvaDI+CiAgCiAgPGxhYmVsIGZvcj0iaXAiPkV4dGVuc2lvbiBJUCBBZGRyZXNzPC9sYWJlbD4KICA8aW5wdXQgdHlwZT0idGV4dCIgaWQ9ImlwIiBwbGFjZWhvbGRlcj0iMTkyLjE2OC4xLjUwIiAvPgogIAogIDxsYWJlbCBmb3I9InBvcnQiPlBvcnQ8L2xhYmVsPgogIDxpbnB1dCB0eXBlPSJ0ZXh0IiBpZD0icG9ydCIgcGxhY2Vob2xkZXI9IjMwMDAiIHZhbHVlPSIzMDAwIiAvPgogIAogIDxidXR0b24gb25jbGljaz0ic2F2ZSgpIj5TYXZlPC9idXR0b24+CgogIDxzY3JpcHQ+CiAgICAvLyBQcmUtZmlsbCBleGlzdGluZyBkYXRhIGlmIHByb3ZpZGVkIGluIFVSTAogICAgZnVuY3Rpb24gZ2V0UXVlcnlQYXJhbShoKSB7CiAgICAgIHZhciByZXN1bHQgPSBuZXcgUmVnRXhwKCdbez9dXS4qKz8pJyArIGgpLmV4ZWMod2luZG93LmxvY2F0aW9uLmhyZWYpOwogICAgICByZXR1cm4gcmVzdWx0ICYmIGRlY29kZVVSSUNvbXBvbmVudChyZXN1bHRbMV0pIHx8ICcnOwogICAgfQogICAgCiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXAnKS52YWx1ZSA9IGdldFF1ZXJ5UGFyYW0oJ2lwJykgfHwgJyc7CiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9ydCcpLnZhbHVlID0gZ2V0UXVlcnlQYXJhbSgncG9ydCcpIHx8ICczMDAwJzsKCiAgICBmdW5jdGlvbiBzYXZlKCkgewogICAgICB2YXIgaXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXAnKS52YWx1ZTsKICAgICAgdmFyIHBvcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9ydCcpLnZhbHVlOwogICAgICAKICAgICAgdmFyIGNvbmZpZyA9IHsgImlwIjogaXAsICJwb3J0IjogcG9ydCB9OwogICAgICBsb2NhdGlvbi5ocmVmID0gJ3BlYmJsZWpzOi8vY2xvc2UjJyArIGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjb25maWcpKTsKICAgIH0KICA8L3NjcmlwdD4KPC9ib2R5Pgo8L2h0bWw+";

function getBridgeUrl() {
  var ip = localStorage.getItem('bridge_ip') || DEFAULT_IP;
  var port = localStorage.getItem('bridge_port') || DEFAULT_PORT;
  return "http://" + ip + ":" + port + "/";
}

function scheduleNextFetch() { setTimeout(fetchStatus, 2000); }

function fetchStatus() {
  var req = new XMLHttpRequest();
  req.open('GET', getBridgeUrl() + 'status', true);
  req.onload = function() {
    if (req.status === 200) sendToWatch(req.responseText);
    scheduleNextFetch();
  };
  req.onerror = function() { scheduleNextFetch(); };
  req.ontimeout = function() { scheduleNextFetch(); };
  req.timeout = 3000; 
  req.send(null);
}

function sendToWatch(responseText) {
  try {
    var response = JSON.parse(responseText);
    
    // DEFAULT TO -1 (Unknown) if missing
    var safeVolume = -1;

    // Check all possible locations for volume
    if (response.volume !== undefined && response.volume !== null) {
      safeVolume = parseInt(response.volume);
    } else if (response.volume_value !== undefined) {
      safeVolume = parseInt(response.volume_value);
    } else if (response.level !== undefined) {
      safeVolume = parseInt(response.level);
    }
    
    // If we found a value but parsing failed, revert to -1
    if (isNaN(safeVolume)) safeVolume = -1;

    Pebble.sendAppMessage({ 
      '1': response.zone || "Unknown",   
      '2': response.track || "",  
      '3': response.artist || "",
      '4': response.is_playing ? 1 : 0,
      '5': safeVolume,
      '6': response.is_fixed_volume ? 1 : 0
    });
  } catch (err) {
    console.log("JSON Err: " + err);
  }
}

Pebble.addEventListener('ready', function() { fetchStatus(); });

Pebble.addEventListener('appmessage', function(e) {
  var command = e.payload['0']; 
  var req = new XMLHttpRequest();
  req.open('GET', getBridgeUrl() + command, true);
  req.onload = function() {
    if (req.status === 200) sendToWatch(req.responseText);
  };
  req.send(null);
});

Pebble.addEventListener('showConfiguration', function(e) {
  var ip = localStorage.getItem('bridge_ip') || DEFAULT_IP;
  var port = localStorage.getItem('bridge_port') || DEFAULT_PORT;
  Pebble.openURL(CONFIG_URL + "&ip=" + encodeURIComponent(ip) + "&port=" + encodeURIComponent(port));
});

Pebble.addEventListener('webviewclosed', function(e) {
  if (e.response) {
    var config = JSON.parse(decodeURIComponent(e.response));
    if (config.ip) {
      localStorage.setItem('bridge_ip', config.ip);
      localStorage.setItem('bridge_port', config.port || "3000");
    }
  }
});
