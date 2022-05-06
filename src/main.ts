import Customer from "./domain/entity/customer";
import Address from "./domain/entity/address";
import Order from "./domain/entity/order";
import OrderItem from "./domain/entity/order_item";

let customer = new Customer("123", "Leo Fontolan");
const address = new Address("Rua do Leão", 2, "12345-678","São Paulo");
customer.address = address;
customer.activate();

const item1 = new OrderItem("1", "Coca-Cola", 5.5, "p1", 2);
const item2 = new OrderItem("2", "Temaki", 15, "p2", 2);

const order = new Order("1", "123", [item1, item2]);