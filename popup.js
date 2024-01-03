const quoteText  = document.getElementById("quote"),
        authorname = document.getElementById("name"),
        quoteBtn = document.getElementById("btn"),
        soundBtn = document.getElementById("sound"),
        copyBtn = document.getElementById("copy"),
        twitterBtn = document.getElementById("twt");
        
        // random quote function
        function randomquote(){
           quoteBtn.classList.add("loading");
           quoteBtn.innerText = "loading Quote...";
           // fetching random quote/data from the API and parsing it into javascript object 
           fetch("https://api.quotable.io/random").then(res => res.json()).then(result =>{
            quoteText.innerText = result.content;
            authorname.innerText = '~ '+ result.author;
            quoteBtn.innerText = "New Quote";
            quoteBtn.classList.remove("loading");
        
           });
        }
        
        soundBtn.addEventListener("click", ()=>{
           // the SpeeceSynthesisUtterance is web speech api that represents speech a speech request
        let utterence = new SpeechSynthesisUtterance(`${quoteText.innerText}  by ${authorname.innerText} `);
        speechSynthesis.speak(utterence); // speak method of speechSynthesis speaks the utterance
        });
        
        copyBtn.addEventListener("click", ()=>{
           // copying the quote text on copyBtn click
           // writeText() property write the specefied text string on the system clipboard.
        
           navigator.clipboard.writeText(quoteText.innerText)
        
        });
        
        twitterBtn.addEventListener("click", ()=>{
      
           window.open(`https://www.youtube.com/watch?v=dQw4w9WgXcQ`, "_blank"); // opening a new twitter tab with pressing quote in the url
           
        
        });
        
        
        
        
        quoteBtn.addEventListener("click" , randomquote);