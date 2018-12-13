riot.mixin({
    // Public API key
    _key: '6c6zaTOxFJmzC',

    //Api request url
    _url: 'http://api.giphy.com/v1/gifs/search',

    //search method
    giphySearch: function(term){
        //console.log('Searching from api mixin');
        //encode search term
        term= encodeURIComponent(term);

        var req = `${this._url}?api_key=${this._key}&q=${term}`

        //create new request
        let xhr = new XMLHttpRequest();
        xhr.open('GET',req);
        xhr.onload = function(){
            let res = (xhr.status ===200) ? JSON.parse(xhr.responseText) : null;
            console.log(res)
        }
        xhr.send();
    }
});