var sboModule = sboModule || {};

(function () {
    let startNew = function () {

        let techbusBaseUrl = 'https://techbus.safaribooksonline.com/';
        let course = {
            'id': window.location.pathname.match('/([0-9]+)/?')[1],
            'name': document.querySelector('.src-SafariChrome-wrapper h1').textContent,
            'time': document.querySelector(".src-SafariChrome-wrapper section:nth-of-type(3) span:nth-of-type(2)").textContent,
            'thumbnail': document.querySelector(".src-SafariChrome-wrapper section:nth-of-type(2) img").src,
            'topic': document.querySelector(".src-SafariChrome-wrapper section:nth-of-type(3) div:nth-of-type(2) a").textContent
        };
        let date = course.thumbnail.match(/([\d]{4})-([\d]{2})-([\d]{2})/); // 2018-10-01
        course.date = `${date[1]}.${date[2]}`; // 2018.10

        $.get(techbusBaseUrl + course.id).always(function (html) {
            sboModule.crawlerService.crawl($('.TableOfContents-TOCPart-Rl-Yx > ol > li'), html, course);
        });
    };

    let startTechbus = function () {
        setTimeout(function () {
            sboModule.crawlerService.crawl($('a[data-clip-ref]'));
        }, 5000);
    };

    if (window.location.hostname.indexOf('www.safaribooksonline.com') >= 0) {
        startNew();
    } else {
        startTechbus();
    }
})();
