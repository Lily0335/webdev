const accountID = Symbol("accountID");

const vehicle = {
    brand: "Tesla",
    model: "Model S",
    [accountID]: "TSL-98765",
    year: 2023,
    type: "Electric",
    owner: {
        name: "Michael Johnson",
        licenseNumber: "DLX-12345",
        contact: {
            phone: "123-456-7890",
            email: "michael.j@example.com"
        }
    },
    specifications: {
        batteryCapacity: "100 kWh",
        range: "405 miles",
        topSpeed: "200 mph",
        acceleration: "0-60 mph in 1.99s"
    },
    features: ["Autopilot", "Smart Summon", "Wireless Charging", "Heated Seats"],
    serviceHistory: [
        { date: "2023-06-15", service: "Tire Rotation", cost: "$50" },
        { date: "2023-09-10", service: "Battery Checkup", cost: "$100" }
    ],
    insurance: {
        provider: "Tesla Insurance",
        policyNumber: "TES-456789",
        expiryDate: "2025-07-20"
    },
    updateOwner(newOwner) {
        this.owner.name = newOwner;
    },
    addFeature(newFeature) {
        this.features.push(newFeature);
    },
    addService(date, service, cost) {
        this.serviceHistory.push({ date, service, cost });
    },
    getServiceHistory() {
        return this.serviceHistory.map(entry => `${entry.date}: ${entry.service} (${entry.cost})`).join("\n");
    },
    getVehicleInfo() {
        return `${this.brand} ${this.model} (${this.year}) - ${this.type}`;
    }
};

console.log(vehicle.getVehicleInfo()); // Tesla Model S (2023) - Electric
console.log(vehicle[accountID]); // Accessing unique account ID
console.log(vehicle.owner.name); // Owner name
console.log(vehicle.specifications.range); // Vehicle range
console.log(vehicle.features); // List of features
vehicle.addFeature("360-Degree Camera");
console.log(vehicle.features); // Updated features
vehicle.addService("2024-01-05", "Brake Inspection", "$80");
console.log(vehicle.getServiceHistory()); // Updated service history
console.log(vehicle.insurance.provider); // Insurance provider
console.log(vehicle);

