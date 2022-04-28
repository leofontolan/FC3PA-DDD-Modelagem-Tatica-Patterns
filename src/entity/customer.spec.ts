import Customer from "./customer";

describe("Customer unit Test", () => {

    it("should throw error when id is empty", () => {
        
        expect(() => {
            let customer = new Customer("", "Leo");
        }).toThrowError("Id is required");
    });
});