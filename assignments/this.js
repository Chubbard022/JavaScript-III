/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding = binding the content of what this is. It will return the window and its properties and prototypes.
* 2. Implicit Binding = Binding that occurs on whatever is applied to the left of the this keyword
* 3. Explicit Binding = Binding that is for functions. it can help add prototypes and other important bindings to a function
* 4. New Binding = Binding that occurs to a constructor function that allows you to create an instance of that constructor.
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding

console.log(this);

// Principle 2
// code example for Implicit Binding

const person = {
    name: 'curtis',
    age: 21,
    forLucnh: 'sandwhich',
    lunch: function(){
        return `I ate a ${this.forLunch} `;
    }
}

// Principle 3
// code example for New Binding

function Coder(attr){
    this.name = attr.name;
    this.skills = attr.skills;
}

const curtis = new Coder({name:'curtis', skills: 'HTML and CSS'});

console.log(curtis.skills);


// Principle 4
// code example for Explicit Binding