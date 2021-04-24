chrome.runtime.onInstalled.addListener(function () {
    chrome.contextMenus.create({
        title: 'קישור מהיר לווטספ',
        id: 'link',
        contexts: ['selection'],
    });
    chrome.contextMenus.onClicked.addListener(click=>{
        if (click.menuItemId==='link' && click.selectionText ){
            const number = '972' + click.selectionText;
            window.open(`https://web.whatsapp.com/send?phone=${number}`, '_blank');
        }

    })
});