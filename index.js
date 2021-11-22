var shopper = {
    grocerycart: ["turkey", "stuffing", "potatoes", "salad", "celery", "onions", "pie crust"],
    firstname: "Davey",
    lastname: "Jones",
    age: 42,
    isAtTheStore: true,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};


console.log(shopper)