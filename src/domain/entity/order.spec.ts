import Order from "./order";
import OrderItem from "./order_item";

describe("Order unit Test", () => {



    it("should throw error when id is empty", () => {
        expect(() => {
            let order = new Order("", "123", []);
        }).toThrowError("id is required");
    });



    it("should throw error when customerID is empty", () => {
        expect(() => {
            let order = new Order("123", "", []);
        }).toThrowError("CustomerID is required");
    });

    it("should throw error when Item is empty", () => {
        expect(() => {
            let order = new Order("123", "132", []);
        }).toThrowError("Items are required");
    });




    it("should calculate total", () => {
       const item1 = new OrderItem("i1", "Item 1", 100, "p1", 2);
       const item2 = new OrderItem("i2", "Item 2", 200, "p2", 2);
       const order = new Order("o1", "c1", [item1]);
       let total = order.total();

       expect(total).toBe(200);

       const order2 = new Order("o2", "c2", [item1, item2]);
       total = order2.total();
       expect(total).toBe(600);
    });




    it("should throw error if the item qtd is less or equal zero", () => {
        
        
        expect(() => {
            const item = new OrderItem("i1", "Item 1", 100, "p1", 0);
            const order = new Order("o1", "c1", [item]);
        }).toThrowError("Item qtd must be greater than zero");
        
     });
});