import Order from "./order";

describe("Order unit Test", () => {

    it("should throw error when id is empty", () => {
        expect(() => {
            let order = new Order("", "123", []);
        }).toThrowError("id is required");
    });

});