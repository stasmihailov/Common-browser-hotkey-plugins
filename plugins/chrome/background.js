// vim:set noet sts=0 sw=4 ts=4:
const createRedirectingListener = (matchingCommandName, redirectUrl) => cmd => {
    if (cmd !== matchingCommandName) {
        return;
    }

    chrome.tabs.query({active: true, currentWindow: true}, tabs => {
        const prevTab = tabs[0].id;
        const isCalledFromSameTab = tabs[0].url === redirectUrl;
        console.log(`isCalledFromSameTab: ${isCalledFromSameTab}`);
        if (isCalledFromSameTab) {
            return;
        }

        let blankTab = undefined;
        chrome.tabs.create({url: redirectUrl}, tab => {
            blankTab = tab.id;
        });

        chrome.tabs.onRemoved.addListener(closedTab => {
            if (closedTab === blankTab) {
                try {
                    chrome.tabs.update(prevTab, {highlighted: true});
                } catch (e) {
                    // ok - prevTab is already closed
                }
            }
        });
    });
};

chrome.commands.onCommand.addListener(createRedirectingListener('open-extensions-page', 'chrome://extensions/'));
chrome.commands.onCommand.addListener(createRedirectingListener('open-flags-page', 'chrome://flags/'));
chrome.commands.onCommand.addListener(createRedirectingListener('open-urls-page', 'chrome://chrome-urls/'));

