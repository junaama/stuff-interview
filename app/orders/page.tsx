'use client'
import { useEffect, useState } from 'react';

export default function OrdersPage() {
  const [orders, setOrders] = useState<any[]>([]);

  useEffect(() => {
    fetch('/api/orders?user_id=...') // TODO: hardcode or pass real id
      .then(res => res.json())
      .then(data => setOrders(data.data));
  }, []);

  return (
    <div>
      <h1>Orders</h1>
      <pre>{JSON.stringify(orders, null, 2)}</pre>
    </div>
  );
}
