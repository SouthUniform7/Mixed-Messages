const getRandQuote = arr => {
    return arr[Math.floor(Math.random()* arr.length)];

}

const one = ['Sometimes the road less traveled is less traveled for a reason.', 'There is no such thing as fun for the whole family.', 'A bookstore is one of the only pieces of evidence we have that people are still thinking.', 'You can be passionate about anything.', 'Pay attention, don’t let life go by you.', 'Fall in love with the back of your cereal box.',
'It’s amazing that the amount of news that happens in the world every day always just exactly fits the newspaper.', 'You know you’re getting old when you get that one candle on the cake. It’s like, ’See if you can blow this out.', 
'To me, if life boils down to one thing, it’s movement. To live is to keep moving.', 'Make no mistake about why these babies are here - they are here to replace us.', 
'A two-year-old is kind of like having a blender, but you don’t have a top for it.'];

const two = ['I’m Cosmo Kramer, the Assman!', 'You contribute nothing to society!', 'I’m out there, Jerry, and I’m loving every minute of it!', 'Who turns down a Junior Mint?'];

const three = ['This, will be the SUMMER OF GEORGE!', 'People take taxis across town to get this marble rye!', 'AH! It’s time for the airing of grievances!'];

console.log(getRandQuote(one) + '\n' + getRandQuote(two) + '\n' + getRandQuote(three));