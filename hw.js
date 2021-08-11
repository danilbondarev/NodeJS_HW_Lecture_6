function getHashtags(text) {
    const urlRegex = /(https?:\/\/|www\.)([^\s]+)/g;

    const result1 = text.match(urlRegex);
    
    const outMatch = [];
    
    for (let i = 0; i < result1.length; i++) {     
    	outMatch[i] = '#'+result1[i].replace(/^(?:https?:\/\/)|(?:www\.)|\.[^.]*$/g, '').replace(/-|,|\||:/g, '_');
    }
    return outMatch;
}

let text = "Find me at http://www.example-lololo.com and also at http://stackoverflow.com.ua . And www.google.com or https://yahoo";
let html = getHashtags(text);

console.log(html);