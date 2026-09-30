

function DeliveryTime(area){
    const time = {
        "Bole": "25-35 Minutes",
        "megenagna": "30-40 Minutes",
        "piasa": "20-30 Minutes",
        "arat-kilo": "35-45 Minutes",
        "cmc": "15-25 Minutes",
        "mexico": "38-50 Minutes"
    }

    return time[area] || "45-60 Minutes";
}

export default DeliveryTime;