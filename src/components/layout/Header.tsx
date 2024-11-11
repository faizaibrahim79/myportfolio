import { Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";


import {
   Sheet,
   SheetContent,
   SheetDescription,
   SheetHeader,
   SheetTitle,
   SheetTrigger,
 } from "@/components/ui/sheet"
 

 export default function Header(){
     return(
        <header className ="flex justify-between py-4 px-4 max-w-screen-2xl mx-auto">
             {/* Logo */}
             <div className="rounded-full border-r-8 border-l-8 ">
               <h4 className="text-xl">FF</h4>
            </div>
             {/* Nav buttons */}
             <ul className ="hidden md:block" >
                <li className ="space-x-8 p-1">
                 <Link className = "hover:underline " href="/">Home</Link>
                 <Link className = "hover:underline" href="/about">About</Link>
                 <Link className = "hover:underline" href="/contact">Contact</Link>
                 <Link className = "hover:underline" href="/project">Project</Link>
                </li>
             </ul>
             
<Sheet>
  <SheetTrigger className = "md:hidden"><Menu /></SheetTrigger>
  <SheetContent className="w-[150px] bg-black text-white">
<ul>
               
   <li className="hover:text-blue-600"><Link href="/">Home</Link></li>
   <li className="hover:text-blue-600"><Link href="/about">About</Link></li>
   <li className="hover:text-blue-600"><Link href="/contact">Contact</Link></li>
   <li className="hover:text-blue-600"><Link href="/project">Project</Link></li>
                
</ul>
             
  </SheetContent>
</Sheet>

         </header>
    )
 }
