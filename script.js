


const quote = document.getElementById('quote');
const quoteBox = document.querySelector('.quote-box');
const authurName = document.getElementById('author');
const button = document.querySelector('button');
const api_url = 'https://api.quotable.io/random';
const preloader = document.querySelector('.preloader');


button.addEventListener('click', ()=> getQuote(api_url));



async function getQuote(url){

    try {

        preloader.style.display = 'block';
        const responce = await fetch(url);
        const data = await responce.json();
        console.log(data);
        quote.innerHTML = data.content;
        authurName.innerHTML = data.author;
        preloader.style.display = 'none';


    } catch (error){

        console.error('Error in Fetching data : ', error);
        quoteBox.innerHTML = '';
        const errorMessage = document.createElement('h2');
        errorMessage.className = 'error-message';
        errorMessage.innerHTML = 'Something went Wrong';
        quoteBox.appendChild(errorMessage);

        preloader.style.display = 'none';
        


    }       

}

getQuote(api_url);