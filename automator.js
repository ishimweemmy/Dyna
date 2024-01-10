export const ordersData = [
  {
    id: "1",
    date: "2023-01-01",
    status: "pending",
    customer: "Alice Murinho",
    productName: "Product A",
    revenue: 50,
  },
  {
    id: "2",
    date: "2023-01-02",
    status: "completed",
    customer: "Alice Murinho",
    productName: "Product B",
    revenue: 75.5,
  },
  {
    id: "3",
    date: "2023-01-03",
    status: "completed",
    customer: "Alice Murinho",
    productName: "Product C",
    revenue: 30.25,
  },
  {
    id: "4",
    date: "2023-01-01",
    status: "cancelled",
    customer: "Alice Murinho",
    productName: "Product A",
    revenue: 50,
  },
  {
    id: "5",
    date: "2023-01-02",
    status: "shipped",
    customer: "Alice Murinho",
    productName: "Product B",
    revenue: 75.5,
  },
  {
    id: "6",
    date: "2023-01-03",
    status: "pending",
    customer: "Alice Murinho",
    productName: "Product C",
    revenue: 30.25,
  },
  {
    id: "7",
    date: "2023-01-01",
    status: "cancelled",
    customer: "Alice Murinho",
    productName: "Product A",
    revenue: 50,
  },
  {
    id: "8",
    date: "2023-01-02",
    status: "shipped",
    customer: "Alice Murinho",
    productName: "Product B",
    revenue: 75.5,
  },
  {
    id: "9",
    date: "2023-01-03",
    status: "completed",
    customer: "Alice Murinho",
    productName: "Product C",
    revenue: 30.25,
  },
  {
    id: "10",
    date: "2023-01-01",
    status: "pending",
    customer: "Alice Murinho",
    productName: "Product A",
    revenue: 50,
  },
  {
    id: "11",
    date: "2023-01-02",
    status: "cancelled",
    customer: "Alice Murinho",
    productName: "Product B",
    revenue: 75.5,
  },
  {
    id: "12",
    date: "2023-01-03",
    status: "cancelled",
    customer: "Alice Murinho",
    productName: "Product C",
    revenue: 30.25,
  },
];

export const ORDER_STATUS = {
  pending: "pending", // The order is placed and awaiting processing.
  shipped: "shipped", // The order has been shipped, and tracking information is available.
  completed: "completed", // The entire order process, including delivery, is complete.
  cancelled: "cancelled", // Incase the customer cancels the order
};

// function updateOrderStatuses(orders) {
//     return orders.map(order => {
//         const randomIndex = Math.floor(Math.random() * Object.keys(ORDER_STATUS).length);
//         const randomStatus = Object.values(ORDER_STATUS)[randomIndex];
//         return { ...order, status: randomStatus };
//     });
// }

const updateOrdersData = () => {
  return ordersData.map((order) => {
    const { id, date, status, customer, revenue } = order;
    return {
      id,
      date,
      status,
      customer,
      revenue,
      email: "ualice@gmail.com",
      phoneNumber: "0789706579",
    };
  });
};

const updatedOrders = updateOrdersData();
console.log(updatedOrders);
