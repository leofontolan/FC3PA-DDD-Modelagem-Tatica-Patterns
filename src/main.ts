import Customer from "./entity/customer";
import Address from "./entity/address";
import Order from "./entity/order";
import OrderItem from "./entity/order_item";

let customer = new Customer("123", "Leo Fontolan");
const address = new Address("Rua do Leão", 2, "12345-678","São Paulo");
customer.address = address;
customer.activate();

const item1 = new OrderItem("1", "Coca-Cola", 5.5);
const item2 = new OrderItem("2", "Temaki", 15);

const order = new Order("1", "123", [item1, item2]);