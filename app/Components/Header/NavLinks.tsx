import NavType from "@/app/Type/NavType";
import Link from "next/link";

// export interface NavLinksProps {
//   navlinks: NavType[];
// }

export default function NavLinks({
  navlinks,
  params,
}: {
  navlinks: NavType[];
}) {
  return (
    <div className="flex items-center gap-4 whitespace-nowrap ">
      {navlinks.map((nav, index) => {
        return (
          <Link
            className="px-1.75 py-2.5 transition-colors duration-300 hover:bg-gray-200 rounded"
            href={`/category/${nav.slug}`}
            key={index}
          >
            {nav.nameBn} {nav.icon}
          </Link>
        );
      })}
    </div>
  );
}
