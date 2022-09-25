export interface IOrder {
  id: string,
  itemId: string,
  ownerId: string,
  customerId: string,
  cost: string,
  orderTime: string[],
}