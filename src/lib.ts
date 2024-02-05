import { getCustomerSync } from "./db";
import { send } from "./mail";


// Testing numbers 
export function absolute(number: number) {
  return (number >= 0) ? number : -number;
}

// Testing strings 
export function greet(name: string) { 
  return 'Welcome ' + name; 
}

// Testing arrays 
export function getCurrencies() { 
  return ['USD', 'AUD', 'EUR'];
}

// Testing objects 
export function getProduct(productId: number) { 
  return { id: productId, price: 10 };
}

// Testing exceptions 
export function registerUser(username: string) { 
  if (!username) throw new Error('Username is required.');

  return { id: new Date().getTime(), username: username }
}

// Mock functions 
export function applyDiscount(order: any) { 
  const customer = getCustomerSync(order.customerId);

  if (customer.points > 10) 
    order.totalPrice *= 0.9; 
}

// Mock functions 
export function notifyCustomer(order: any) { 
  const customer = getCustomerSync(order.customerId);

  send(customer.points, 'Your order was placed successfully.');
}
