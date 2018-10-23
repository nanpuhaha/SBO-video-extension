chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    let filename = `${leftPad(message.index + 1)} - ${message.title.replace(/\W+/g, " ")}.mp4`;
    let foldername = `[${message.course.date}] ${message.course.name} (${message.course.id}) ${message.course.time}`;

    chrome.downloads.download({
        url: message.videoUrl,
        filename: `SafariBooksOnline/${foldername}/${filename}`,
        saveAs: false
    });
});

function leftPad(num) {
    var str = num + "";
    var pad = "000";
    return pad.substring(0, pad.length - str.length) + str;
}
