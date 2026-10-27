import NavType from "@/app/Type"
import Link from "next/link"

export interface NavLinksProps {
    navlinks: NavType[]
}

export default function NavLinks({ navlinks }: NavLinksProps) {
    
    return <div className="flex items-center gap-4 whitespace-nowrap ">
        {
            navlinks.map((nav, index)=>{
                return <Link className="px-[7px] py-[10px] transition-colors duration-300 hover:bg-gray-200 rounded" href={`/${nav.slug}`} key={index}>{nav.nameBn} {nav.icon}</Link>
            })
        }
    </div>
}