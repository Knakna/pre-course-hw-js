let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};
let copyWithAddress = JSON.parse(JSON.stringify(passportWithAddress));
copyWithAddress.address.city = "Bobryisk";
console.log(passportWithAddress.address.city);
console.log(copyWithAddress.address.city);