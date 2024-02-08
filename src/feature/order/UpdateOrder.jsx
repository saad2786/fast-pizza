import React from "react";
import { useFetcher } from "react-router-dom";
import Button from "../../ui/Button";
import { updateOrder } from "../../services/apiRestaurant";

export default function UpdateOrder() {
  const fetcher = useFetcher();
  const isLoadingPriority = fetcher.state !== "idle";
  return (
    <fetcher.Form method="PATCH">
      <Button type="primary" disabled={isLoadingPriority}>
        {isLoadingPriority ? "Prioritizing...." : "Make Priority"}
      </Button>
    </fetcher.Form>
  );
}
export async function action({ request, params }) {
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}
