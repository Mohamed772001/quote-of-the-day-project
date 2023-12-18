
const arrayOfQuotes = [
    {'author': ' Martin Luther King Jr', 
     'quote': 'Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.'
    },
    {'author': 'Friedrich Nietzsche', 
     'quote': 'Without music, life would be a mistake.'
    },
    {'author': 'Frank Sinatra', 
     'quote': 'The best revenge is massive success.'
    },
    {'author': 'Ralph Waldo Emerson', 
     'quote': 'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.'
    },
    {'author': 'Nelson Mandela', 
     'quote': 'Resentment is like drinking poison and waiting for your enemies to die.'
    },
    {'author': 'Stephen Chbosky', 
     'quote': 'We accept the love we think we deserve.'
    },
];

function generateQuote(){
    const random = Number.parseInt(Math.random()*arrayOfQuotes.length + 1);
    document.querySelector('#quoteOutput').textContent = `\"${arrayOfQuotes[random].quote}\"`;
    document.querySelector('#authorOutput').textContent = `--${arrayOfQuotes[random].author}`;
    
}
