describe('plugun test ', () => {
    it('custom plugin', (clinet) => {
        clinet
            .url('https://github.com/')
            .pause()
            .waitForElementNotVisible('.HeaderMenu-link.border-0.width-full.width-lg-auto.px-0.px-lg-2.py-3.py-lg-2.no-wrap.d-flex.flex-items-center.flex-justify-between.js-details-target')
            .waitForElementPresent('.HeaderMenu-link.border-0.width-full.width-lg-auto.px-0.px-lg-2.py-3.py-lg-2.no-wrap.d-flex.flex-items-center.flex-justify-between.js-details-target')
            .waitForElementVisible('.HeaderMenu-link.border-0.width-full.width-lg-auto.px-0.px-lg-2.py-3.py-lg-2.no-wrap.d-flex.flex-items-center.flex-justify-between.js-details-target')
            waitForElementNotPresent('.HeaderMenu-link.border-0.width-full.width-lg-auto.px-0.px-lg-2.py-3.py-lg-2.no-wrap.d-flex.flex-items-center.flex-justify-between.js-details-target')
    })

}); 