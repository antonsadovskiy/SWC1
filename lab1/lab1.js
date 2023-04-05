class CarDealer {
    constructor(cars){
        this.cars = cars
    }

    findCheapestCar(){
        let cheapestCar = null
        for (let car of this.cars){
            if (!cheapestCar || car.price < cheapestCar.price){
                cheapestCar = car
            }
        }    
        return cheapestCar
    }
    findMostExpensiveCar(){
        let mostExpensiveCar = null
        for (let car of this.cars){
            if (!mostExpensiveCar || car.price > mostExpensiveCar){
                mostExpensiveCar = car
            }
        }
        return mostExpensiveCar
    }
    calculateTotalPrice(){
        let totalPrice = 0
        for (let car of this.cars){
            totalPrice += car.price
        }
        return totalPrice
    }
}

class Car {
    constructor(brand, model, price){
        this.brand = brand
        this.model = model
        this.price = price
    }
    show(){
        return `Brand: ${this.brand}, Model: ${this.model}, Price: ${this.price}$`
    }
}

const car1 = new Car("Ford", "Mustang", 32000)
const car2 = new Car("Chevrolet", "Camaro", 31000)
const car3 = new Car("Dodge", "Challenger", 30000)


const carDealer = new CarDealer([car1, car2, car3])
console.log('cheapest car: \n', carDealer.findCheapestCar());
console.log('most expensive car: \n',carDealer.findMostExpensiveCar())
console.log('total cars price: ', carDealer.calculateTotalPrice())