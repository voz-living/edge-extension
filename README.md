# VOZLiving edge-port(In development)
### Another VOZ extension using
- webpack
- react/redux

### Install / Develope
- npm install
- Build DLL: `webpack --colors --progress --config=dll.webpack.config.js `
- Build CSS: `webpack --colors --progress --config=css.webpack.config.js`
- ./dev to run dev extension will build inside /chrome dir
- load unpack extension in /chrome dir

### Publish
- vi ./node_modules/automate-chrome-extension-update/secret/config.json => put CLIENT_ID, APP_ID
- ./node_modules/automate-chrome-extension-update/prepare 
- ./compile;./publish

### TODO Features:
- [X] Remove Ads
- [X] Quote notification (dont have setting yet)
- [X] Preview Thread
- [x] +   Quick reload using command + R
- [x] +   Next/Prev Post by arrow keys
- [x] +   Open new tab
- [x] +   First/Last Post
- [x] Link related features
- [x] +   Remove redirect
- [x] +   Link detection (then convert to link)
- [x] +   Embed Youtube Link
- [x] +   Embed Image Link
- [x] Quick Links
- [x] Add full emoticon into editor (both advanced and quick reply)
- [x] Smart quote minification
- [x] Quick post quotation
- [x] Monitor(Notify) followed threads

### Mics:
- [x] Quick add to ignore list
- [ ] cuộn chuột đến cuối trang thành sang 1 trang mới không cần ấn phím mũi tên (https://vozforums.com/showpost.php?p=101419337&postcount=1128)

Notes: Feedback process 40/40

##
Updates:

3.0.0: Test
