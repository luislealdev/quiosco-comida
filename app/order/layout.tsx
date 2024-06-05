import { OrderSidebar, OrderSummary } from "@/components";
import { ToastNotification } from "@/components/ui/ToastNotification";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <>
            <div className="flex gap-15" style={{ width: '100vw', height: '100vh' }}>
                <OrderSidebar />
                <main style={{ width: '55%', overflow: 'scroll' }} className="p-10">
                    {
                        children
                    }
                </main>
                <hr style={{ width: 10 }} className="no-border bg-white" />
                <OrderSummary />
            </div>
            <ToastNotification />
        </>
    );
}