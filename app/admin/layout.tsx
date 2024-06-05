import AdminSidebar from "@/components/admin/AdminSidebar";
import { ToastNotification } from "@/components/ui/ToastNotification";

export default async function AdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <div className="flex gap-15" style={{ width: '100vw', height: '100vh' }}>
                <aside className="bg-white" style={{ width: '20%' }}>
                    <AdminSidebar />
                </aside>

                <main className="flex p-20" style={{ overflowY: 'scroll', width: '74%' }}>
                    {children}
                </main>
            </div>

            <ToastNotification />
        </>
    )
}