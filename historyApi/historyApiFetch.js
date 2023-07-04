const links = document.querySelector('a');

function handleClick(e) {
    e.preventDefault();
    fetchPage(e.target.href);
    window.history.pushState(null,null,e.target.href);
}


async function fetchPage() {
    const pageResponse = await fetch(url);
    const pageText = await pageResponse.text();
    console.log('url');
}

function replaceContent(newTest) {
    const newHTML = document.createElement('div');
    newHTML.innerHTML = newTest;
}

links.forEach(link => {
    link.addEventListener('click',handleClick); 
});