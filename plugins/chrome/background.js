const createRedirectingListener = (matchingCommandName, redirectUrl) => cmd => {
    if (cmd === matchingCommandName) {
        let prevTab = undefined;
        chrome.tabs.query({active: true, currentWindow: true}, tabs => {
            prevTab = tabs[0].id;
        });

        let blankTab = undefined;
        chrome.tabs.create({url: redirectUrl}, tab => {
            blankTab = tab.id;
        });

        chrome.tabs.onRemoved.addListener(closedTab => {
            if (closedTab === blankTab) {
                chrome.tabs.update(prevTab, {highlighted: true});
            }
        });
    }
};

chrome.commands.onCommand.addListener(createRedirectingListener('open-blank-page', 'about:blank'));
chrome.commands.onCommand.addListener(createRedirectingListener('open-extensions-page', 'chrome://extensions'));
