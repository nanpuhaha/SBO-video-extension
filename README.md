## TODO

- Logging unsupported course URL

- Change Title Format for each video

  > 001 - Preprocessing Data Using Different Techniques6m 39s.mp4  `--> Before`
  >
  > 001 - Preprocessing Data Using Different Techniques - 6m 39s.mp4 `--> After`

- Download Thumbnail Image for each course

- Download all information into course_info.json for each course

- Add 'Download All' Button for each course

- Support to download unsupported course

- Support to download Learning Path

- Download source codes from github or other links describes on Description ('About this video' or 'In Detail')

- Selenium automation

- Move out from Chrome Extension, stand-alone code (Selenium Chrome)

- Automatically downloads all Recently Added videos using Headless Chrome

- Make lecture slide from each video; take screenshot every seconds and remove duplicates or similars using machine learning

## ChangeLog

- Change download path for each course
> `$DEFAULT_DOWNLOAD_PATH/SafariBooksOnline/[2016.11] Python Machine Learning Solutions (9781787127692)/001 - Preprocessing Data Using Different Techniques6m 39s.mp4`
- Overwrite codes with version 2.6 (updated 2018-07-11) from Chrome Web Store

---

# Welcome to Safari (SBO) Chrome Video Extension

Where SBO refers to Safari Books Online (copy rights reserved)

You can download the extension for chrome
[from Chrome webstore here ](https://chrome.google.com/webstore/detail/safari-books-online-video/ihgjlggckknakenjhgmfgaoalflhfihl).


## Features

This extension can be used for both new safari site and old site (techbus) to download the videos (but only if you have a registered account at Safari books online)

### The Old website (techbus)

The old website the one that have the domain name: `techbus.safaribooksonline.com`.

Once you have the extension installed, and you click on any video course, after a while (5 seconds) you will see a little red icon beside each video lesson allow you to download the video (see the picture).

<img src="./docs/techbus.png" width="500">


### The new website
The new webiste that have the domain name: `www.safaribooksonline.com`

In case of the new website and after installing the extension and one you opened the video course main page that have the **Table of Contents** section, you first need to click on **load unsafe scripts**.

<img src="./docs/load_unsafe_scripts.png" width="200">

Then now you can enjoy the video downloads by clicking the little red icon beside each video lesson allow you to download the video (see the picture).


<img src="./docs/new.png" width="500">


## Have issue?
Feel free to contact me via [opening an issue] (https://github.com/mhewedy/SBO-video-extension/issues/new), email or any mean if you need any help.
