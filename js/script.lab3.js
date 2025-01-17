class Apartment {
    constructor(name, pricePerMeter, area) {
        this.name = name;
        this.pricePerMeter = pricePerMeter;
        this.area = area;
    }

    calculateBasePrice() {
        return this.pricePerMeter * this.area;
    }

    renderBaseResult() {
        return `
            <p><strong>Назва:</strong> ${this.name}</p>
            <p><strong>Площа:</strong> ${this.area} м²</p>
            <p><strong>Вартість 1 м²:</strong> ${this.pricePerMeter} грн</p>
            <p><strong>Базова вартість:</strong> ${this.calculateBasePrice().toFixed(2)} грн</p>
        `;
    }
}

class CentralApartment extends Apartment {
    constructor(name, pricePerMeter, area, district) {
        super(name, pricePerMeter, area);
        this.district = district;
    }

    calculatePriceWithSurcharge() {
        let pricePerMeterWithSurcharge = this.pricePerMeter * 1.01;
        return pricePerMeterWithSurcharge * this.area;
    }

    renderResult() {
        let result = super.renderBaseResult();
        if (this.district && this.district.toLowerCase() === "центр" || this.district.toLowerCase() === "печерськ" || this.district.toLowerCase() === "липки" || this.district.toLowerCase() === "шевченківський") {
            const pricePerMeterWithSurcharge = this.pricePerMeter * 1.01;
            result = `
                <p><strong>Назва:</strong> ${this.name}</p>
                <p><strong>Площа:</strong> ${this.area} м²</p>
                <p><strong>Район:</strong> ${this.district}</p>
                <p><strong>Вартість 1 м² з надбавкою:</strong> ${pricePerMeterWithSurcharge.toFixed(2)} грн</p>
                <p><strong>Вартість квартири з надбавкою:</strong> ${this.calculatePriceWithSurcharge().toFixed(2)} грн</p>
            `;
        }
        return result;
    }
}

document.getElementById("apartmentForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const pricePerMeter = parseFloat(document.getElementById("price").value);
    const area = parseFloat(document.getElementById("area").value);
    const district = document.getElementById("district").value.trim();

    let apartment;
    if (district.toLowerCase() === "центр"|| district.toLowerCase() === "печерськ" || district.toLowerCase() === "липки" || district.toLowerCase() === "шевченківський") {
        apartment = new CentralApartment(name, pricePerMeter, area, district);
        document.getElementById("baseText").innerHTML = apartment.renderBaseResult();
        document.getElementById("centralText").innerHTML = apartment.renderResult();
    } else {
        apartment = new Apartment(name, pricePerMeter, area);
        document.getElementById("baseText").innerHTML = apartment.renderBaseResult();
        document.getElementById("centralText").innerHTML = "";
    }
});