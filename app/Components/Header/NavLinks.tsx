import NavType from "@/app/Type"
import Link from "next/link"

export interface NavLinksProps {
    navlinks: NavType[]
}

export default function NavLinks({ navlinks }: NavLinksProps) {
    
    return <div className="flex items-center gap-4 my-3 px-3 whitespace-nowrap ">
        {
            navlinks.map((nav, index)=>{
                return <Link href={`/${nav.slug}`} key={index}>{nav.nameBn} {nav.icon}</Link>
            })
        }
    </div>
}