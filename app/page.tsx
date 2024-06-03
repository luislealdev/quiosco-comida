import { OrderSidebar, OrderSummary } from "@/components"

export default function Home() {
  return (
    <div className="flex gap-15" style={{ width: '100vw', height: '100vh' }}>
      <OrderSidebar />
      <main style={{ width: '55%' }} className="p-10">
        <p>Order Summary</p>
      </main>
      <hr style={{ width: 10 }} className="no-border bg-white" />
      <OrderSummary />
    </div>
  );
}
