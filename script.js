//Prompt the user for several words (separated by commas).
let answer=prompt('Veuillez saisir plusieurs et separés les par des virgules');
//Put the words into an array.
let words=answer.split(",")
// Console.log the words one per line, in a rectangular frame as seen below.
// Check out the Hints and Requirements below.
// For example, if the user gives you:
// Hello, World, in, a, frame
// you will transform it to : ["Hello", "World", "in", "a", "frame"]
// that will get displayed as:
let longmotMax=0;

let star="";
words.forEach((item)=>
{
    if(longmotMax<item.length)
    {
      longmotMax=item.length
    }
});
longmotMaxi = longmotMax + 4;
star +=   "*".repeat(longmotMaxi);
star += "\n";
let space = '';

 for(let i=0; i < words.length; i++)
{
    let spaceNumber = longmotMaxi - words[i].length - 3 ;
    space = ' '.repeat(spaceNumber)

    star +=  "* " + words[i] + space + "* \n";
}

star = star + "*".repeat(longmotMaxi);

 console.log(star);