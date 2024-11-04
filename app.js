const prompt = require("prompt-sync")({signint:true})
let favoriteColors = [];


function getColors() {
    while (favoriteColors.length < 3) {
        
        let color = prompt("Please enter a color you like: ");

        
        if (color) {
            
            favoriteColors.push(color);
            
            console.log("Updated favorite colors:", favoriteColors);
        } else {
            console.log("You didn't enter a color. Please try again.");
        }
    }
    console.log("You've added all your favorite colors:", favoriteColors);
}


getColors();
