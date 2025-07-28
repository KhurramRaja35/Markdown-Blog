"use client";
import React from 'react'
import Link from "next/link";
import { useState , useEffect} from "react";
import { Button } from "@/components/ui/button"
import { ModeToggle } from './theme-button'; // that is inside theme button compunent we dont have to impoet the component just the function
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { useLoadingBar } from "react-top-loading-bar";
import { usePathname } from 'next/navigation';
import LoadingBar from 'react-top-loading-bar';


const Navbar = () => {

    const [progress, setProgress] = useState(0)
    const pathname = usePathname()

    useEffect(() => {
      setProgress(30)

      setTimeout(() => {
        setProgress(70)
      }, 100);

      setTimeout(() => {
        setProgress(100)
      }, 400);
    
     
    }, [pathname])


    useEffect(() => {
      setTimeout(() => {
        setProgress(0)
      }, 500);
    
      
    }, [])
    
    

    return (
        <nav className="p-4 bg-background/50 sticky top-0 backdrop-blur-xs border-b z-10 shadow-md">
             <LoadingBar
        color="#933ce6"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
            <div className="container mx-auto  flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold tracking-tight">
                    KBR Blog
                </Link>


                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-6">

                    <Link href="/" className="hover:scale-105 hover:font-semibold transition-transform duration-300 ">
                        Home
                    </Link>
                    
                    <Link href="/blog" className="hover:scale-105 hover:font-semibold transition-transform duration-300 ">
                        Blog
                    </Link>

                    <div className='log-in flex items-center gap-2'>
                        <Button variant="outline">Log in</Button>
                        <Button variant="outline">Sign Up</Button>
                        <ModeToggle />
                    </div>

                </div>



                {/* Mobile Hamburger */}
                <div
                    className="md:hidden flex gap-3 items-center "
                    aria-label="Toggle navigation"
                >
                    <ModeToggle />
                    <Sheet>
                        <SheetTrigger  >
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h16" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 18h16" />
                            </svg>
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader >
                                <SheetTitle className={"text-xl items-center pb-4 border-b"} >KBR Blog</SheetTitle>
                                <SheetDescription className="flex flex-col font-semibold  gap-4 items-center">


                                    <Link href="/" className="  font-medium ">
                                        Home
                                    </Link>
                                   
                                    <Link href="/blog" className="  font-medium ">
                                        Blog
                                    </Link>

                                    <span className='log-in flex flex-col items-center gap-4'>
                                        <Button variant="outline">Log in</Button>
                                        <Button variant="outline">Sign Up</Button>
                                    </span>
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    );
}


export default Navbar
