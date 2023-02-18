! (function () {
    const btn = $("#copy_share");
    btn.click(function () {
        const el = document.querySelector('#copy_share');
        let url = el.dataset.url;
        let txt = el.dataset.title;        
        if (!navigator.clipboard){
            return;
        }
        navigator.clipboard.writeText(txt + "\n" + url)
        .then(() => {
        })
        .catch(err => {
            console.log(txt+"\n"+url);
        });        
    });
}());