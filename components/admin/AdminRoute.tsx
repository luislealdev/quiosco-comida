'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

type AdminRouteProps = {
    link: {
        url: string;
        text: string;
        blank: boolean;
    }
}
export const AdminRoute = ({ link }: AdminRouteProps) => {

    const pathname = usePathname();
    const isActive = pathname.startsWith(link.url);

    return (
        <Link href={link.url} className={`bold f-size-18 p-20 ${isActive && 'bg-blue'}`} target={link.blank ? '_blank' : ''}>
            {link.text}
        </Link>
    )
}
