let apiQuotes=[];
const qText=document.querySelector(".q-text");
const author=document.querySelector(".author");
const newQuotes=document.querySelector(".new-quote");

function newQuote(){
    const random=apiQuotes[Math.floor(Math.random()*apiQuotes.length)];
    author.textContent=random.author;
    qText.textContent=random.text;

    if(random.text.length>100){
        qText.style.fontSize="1.5rem";
    }else{
        qText.style.fontSize="3rem";
    }
    
}

async function Quotes(){
    const apiUrl="https://type.fit/api/quotes";

    try{

        const response=await fetch(apiUrl);
        apiQuotes=await response.json();
        newQuote();
        
    }catch(error){

    }
    
}

newQuotes.addEventListener('click',newQuote);
Quotes();