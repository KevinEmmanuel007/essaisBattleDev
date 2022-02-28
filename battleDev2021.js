const prompt = require("prompt-sync")();
let ligne1 =Number(prompt("saisir la masse necessaire au decollage:"));
let ligne2 =Number(prompt("saisir la distance a parcourir:"));
let Ergole = ligne1 + (ligne2 * 5)
      
console.log("Il faut "+ ligne1 + "kg d'ergol pour le decollage," + "puis 5kg par unité astronomique pour toute la distance "+ ligne2 +"du voyage. Donc,pour ce voyage il nous faut:"+  Ergole +"kg/unite astronomique d'ergol pour tout le voyage.")

