var check = 'cat';

function start() {
    if (check=='cat') {
    document.getElementById('text').innerHTML="This is a dog.";
    document.getElementById('image').src="dog.webp";
    document.getElementById('heading').innerHTML="Dog"
    document.getElementById('text').style.color="blue";
    document.getElementById('heading').style.color="blue";
    check='dog';
    }
    else {
        document.getElementById('text').innerHTML="This is a cat.";
        document.getElementById('image').src="cat.jfif";
        check='cat';
        document.getElementById('heading').innerHTML="Cat"
        document.getElementById('text').style.color="red";
        document.getElementById('heading').style.color="red";
    }
}