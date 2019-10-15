export function doGetOrders() {
  return { type: `@@order/LOAD_ORDERS`,
  };
}
export function doOrder(data:any) {
  return { type: '@@basket/DO_ORDER',
  data
  };
}
