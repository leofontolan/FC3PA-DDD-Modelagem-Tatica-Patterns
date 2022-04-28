import Address from "./address";
import Customer from "./customer";

describe("Customer unit Test", () => {

    //Instanciando objeto com ID em branco
    it("should throw error when id is empty", () => {
        
        expect(() => {
            let customer = new Customer("", "Leo");
        }).toThrowError("Id is required");
    });

    //Instanciando objeto com Name em branco
    it("should throw error when name is empty", () => {
        
        expect(() => {
            let customer = new Customer("123", "");
        }).toThrowError("Name is required");
    });

    //Testando mudar de nome
    it("should change name", () => {
        
        const customer = new Customer("123", "Leo");
        customer.changeName("Gustavo");

       expect(customer.name).toBe("Gustavo");
    });

    //Testando ativar cliente
    it("should activate customer", () => {
        const customer = new Customer("1", "Customer 1");
        const address = new Address("Street 1", 12, "02525-255", "São Paulo");
        customer.address = address;

        customer.activate();
        expect(customer.isActive()).toBe(true);
    });

    // Testando ativar cliente sem endereço
    it("should throw error when active with empty address", () => {
        
        expect(() => {
            const customer = new Customer("1", "Customer 1");
            customer.activate();
        }).toThrowError("Address is mandatory to activate customer");

    });

    //Testando desativar cliente
    it("should deactivate customer", () => {
        const customer = new Customer("1", "Customer 1");
        customer.deactivate();

        expect(customer.isActive()).toBe(false);
    });
});