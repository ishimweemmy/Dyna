export const ORDER_STATUS = {
  pending: "pending", // The order is placed and awaiting processing.
  shipped: "shipped", // The order has been shipped, and tracking information is available.
  completed: "completed", // The entire order process, including delivery, is complete.
  cancelled: "cancelled", // Incase the customer cancels the order
};

export const SHIPMENT_STATUS = {
  processing: "processing", // The shipment is being prepared and packed.
  in_transit: "in_transit", //The shipment is on its way to the destination.
  delivered: "delivered", //The shipment has been successfully delivered to the customer.
};
