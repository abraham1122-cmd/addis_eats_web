


function DeliveryFee(area){
    const fees = {
        "Bole": 110,
        "piassa": 80,
        "cmc": 90,
        "megenagna": 120,
        "arat-kilo": 70,
        "mexico": 100
    }
    return fees[area] || 200;
}

export default DeliveryFee;