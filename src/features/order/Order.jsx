// Test ID: IIDSAT

import { useLoaderData } from "react-router-dom";
import { getOrder } from "../../service/apiRestaurant";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utilities/helpers";

function Order() {
  const order =
    useLoaderData(); /* Check mo yung get order sa loader function sa baba. Doon galing yung loader data na nasa order variable */
  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order; /* destructuring para makuha lahat ng variable */
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  /* Display nalang after netong mga to */
  return (
    <div>
      <div>
        <h2>Status</h2>

        <div>
          {priority && <span>Priority</span>}
          <span>{status} order</span>
        </div>
      </div>

      <div>
        <p>
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p>(Estimated delivery: {formatDate(estimatedDelivery)})</p>
      </div>

      <div>
        <p>Price pizza: {formatCurrency(orderPrice)}</p>
        {priority && <p>Price priority: {formatCurrency(priorityPrice)}</p>}
        <p>To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}</p>
      </div>
    </div>
  );
}

export async function loader({ params }) {
  console.log(params);
  const order = await getOrder(params.orderID); //Order ID since orderID yung nilagay natin sa routing
  return order;
}

export default Order;
