# pebble-roon-remote
A roon remote for your Pebble smartwatch

![Banner](https://i.imgur.com/YOUR_BANNER_IMAGE_LINK.png)

Control your Roon music zones directly from your wrist. This app works with the "Rebble" web services and connects to your local Roon Core via a bridge extension.

### Features
* **Track Control:** Play, Pause, Next, Previous.
* **Zone Selection:** Switch active Roon zones from the watch.
* **Metadata:** See Artist, Track, and Zone Name.
* **Smart Timeout:** Automatically reverts to Track view after 4 seconds of inactivity.

### 📥 [Download Latest Version (v0.90)](https://github.com/YOUR_USERNAME/pebble-roon-remote/releases/latest)

---

### How to Install

**1. Install the Bridge**
This app requires a lightweight server to talk to Roon.
1.  Download the Bridge source code.
2.  Run `npm install` and `node .`
3.  Enable the extension in your Roon Settings.

**2. Install the Watch App**
1.  Download the `.pbw` file from the releases page above.
2.  Open it on your phone with the Pebble App installed.

**3. Configure**
1.  Open the Roon Remote settings in the Pebble App.
2.  Enter the IP address of the computer running the Bridge.
