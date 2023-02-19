let quotes=[["Tout le monde tient le beau pour le beau, c'est en cela que réside la laideur. Tout le monde tient le bien pour le bien, c'est en cela que réside le mal.",'Lao Tseu'],
            [ "La première leçon de l'histoire, c'est ne pas dire ce qui est faux, le seconde c'est d'oser dire ce qui est vrai","Hérodote"],
            [ "Les idées ne triomphenet pas par ce qu'elles sont vraies, mais parce qu'elles sont plus fortes", "Simone Weil"],
           ["Qui vit en paix avec lui-même vit en paix avec l’univers.", "Marc-Aurel"],
           ["Mieux vaut encore subir l'injure que la commettre. ", "Socrate"],
           ["Ne laissez pas les mots penser à votre place. Ayez une parole habitée", "Jiddu Krishnamurti"],
           [ "Jamais la psychologie ne pourra dire sur la folie la vérité, puisque c'est la folie qui détient la vérité de la psychologie.", "Michel Foucault"],
           ["C'est la nature qui guérit les malades.", "Hippocrate"]];



function aleaQuotes() {
  let digit = Math.floor(Math.random() * 8) + 1;
  return digit;
}
//console.log(typeof quote2);
console.log(aleaQuotes());

function newQuote() {
  let i= aleaQuotes();
  document.getElementById("text").innerHTML = quotes[i][0];
  document.getElementById("author").innerHTML = quotes[i][1];
}
window.onload = function ()
{
    newQuote()
};
function shareOntwitter(){
document.getElementById("tweet-quote").innerHTML  = quotes[i][0] +" "+ quotes[i][1] + "#quotes";
}
