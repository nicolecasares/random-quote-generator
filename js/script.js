/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

let quotes = [
  {
    'source':  'Reshma Saujani, Founder of Girls Who Code',
    'quote': 'I also say to my team: Do 10% of your job shittily. Its okay to do something shittily. Perfectionism prevents us from taking double steps in our career. We think we have to be perfect, but we dont.',
    'citation':'Brave Not Perfect',
    'year': '2019',
  },
  {
    'source': 'Sarah Friar, Chief Financial Officer at Square',
    'quote': 'A diversity of thought, perspective and culture is important in any field, not just engineering. Surround yourself with people who support you and get involved in [coding] programs.',
  },
  {
    'source': 'Vanessa Hurst, Co-Founder of Girl Develop It',
    'quote': 'Feeling a little uncomfortable with your skills is a sign of learning, and continuous learning is what the tech industry thrives on! It’s important to seek out environments where you are supported, but where you have the chance to be uncomfortable and learn new things.',
  },
  {
    'source': 'Amber Gordon, Founder of Femsplain',
    'quote': 'Trust in yourself, believe that your voice matters, and know that your words are good enough.',
  },
  {
    'source': 'Ara Katz, Chief Marketing Officer at Spring:',
    'quote': 'There is no recipe, there is no one way to do things — there is only your way. And if you can recognize that in yourself and accept and appreciate that in others, you can make magic.',
  },

];



/***
 * `getRandomQuote` function
***/

let getRandomQuote = () => {
  let randomIndex = Math.floor(Math.random() * quotes.length);
  let randomObject = quotes[randomIndex];
  return randomObject.quote;
}
console.log(getRandomQuote());



/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

// document.getElementById('load-quote').addEventListener("click", printQuote, false);