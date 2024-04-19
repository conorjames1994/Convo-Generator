let phrase1Array = ['Hi!', 'Hello!', 'Hows it going?', 'Whats up?', 'Hey!'];
let phrase2Array = ['I like you.', 'Whats your name?', 'I like what your wearing', 'I dont like you.', 'What are you looking at?'];
let phrase3Array = ['See ya!', 'Bye.', 'Nice to meet you.', 'au revoir.', 'Goodbye!', 'Ciao.'];

const randomiser = (array) => {
  return Math.floor(Math.random() * array.length)
}

let phrase1 = phrase1Array[randomiser(phrase1Array)];

let phrase2 = phrase2Array[randomiser(phrase2Array)];
let phrase3 = phrase3Array[randomiser(phrase3Array)];

const message = (phrase1, phrase2, phrase3) => {
  return `${phrase1} ${phrase2} ${phrase3}`
}

let randMessage = message(phrase1, phrase2, phrase3)
console.log(randMessage)