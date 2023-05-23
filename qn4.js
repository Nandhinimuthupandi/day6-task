class UberPrice{
    constructor(distance,servicetype){
        this.distance = distance;
        this.servicetype=servicetype;
    }
    priceCalculation(){
    var baseFare = this.serviceType === "UberX" ? 10 : 15;
    var pricePerKm = this.serviceType === "UberX" ? 2 : 2.5;
    var totalPrice = baseFare + pricePerKm * this.distance;
    return totalPrice;

    }
}
var price = new UberPrice(6,"UberX");
 var output = price.priceCalculation();
 console.log(output);
