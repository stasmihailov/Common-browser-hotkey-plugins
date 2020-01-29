const commandName = 'open-blank-page';
const blankPageUrl = 'about:blank';

chrome.commands.onCommand.addListener(cmd => {
    if (cmd === commandName) {
        chrome.tabs.create({url: blankPageUrl});
    }
});
