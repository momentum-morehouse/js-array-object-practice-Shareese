let colors = ["black", "silver", "purple", "yellow", "royal blue"];
console.log(colors[0])
console.log(colors[2])

colors[1] = "red"
console.log(colors)

let fourthColor = "royal blue";
colors[4] = fourthColor;
console.log(colors);

colors[5] = "green";
console.log(colors);

colors[0] = "pink";
console.log(colors);

console.log(colors.length)

colors.pop("green");
console.log(colors.length)

for (let i = 0; i < colors.length; i++) 
{
console.log(colors[i]);
}

for (let i = 0; i < colors.length; i++) 
{
console.log(i + "pink:0", "black:1", "red:2", "purple:3", "yellow:4", "royal blue:5", "green:6", + colors[i]);
}

let lastColor = "green";
let lastIndex = colors.length -1;
console.log(colors.length);
//I considered a loop or index to refer back to the last color.
