export const getCustomerSync = (id: number) => { 
  console.log('Reading a customer from MongoDB...');
  return { id: id, points: 11 };
}

export const getCustomer = async (id: number) => { 
  return new Promise((resolve, reject) => {
    console.log('Reading a customer from MongoDB...');
    resolve({ id: id, points: 11 });
  });
}
