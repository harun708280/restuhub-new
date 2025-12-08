"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const drawer = document.getElementById("mobile-drawer");
      if (drawer && !drawer.contains(e.target as Node) && open) {
        setOpen(false);
      }
    };
    if (open) {
      document.addEventListener("mousedown", handleClick);
    }
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between py-4">
       
        <div className="flex items-center relative h-[50px] w-[190px]">
          <Image
            src="/Images/logo.png"
            alt="Logo"
            fill
            priority
          />
        </div>

       
        <nav className="hidden md:flex gap-8 text-[18px] font-medium text-primary">
          <Link href="#" className="hover:text-secondary transition">
            How it works
          </Link>
          <Link href="#" className="hover:text-secondary transition">
            Pricing
          </Link>
          <Link href="#" className="hover:text-secondary transition">
            Why us
          </Link>
        </nav>

       
        <div className="hidden md:flex items-center gap-3">
          <button className="secondary-btn h-fit">Login</button>
          <button className="primary-btn h-fit">Contact Us</button>
        </div>

      
        <button
          className="md:hidden flex items-center justify-center"
          onClick={() => setOpen(true)}
        >
          <Menu className="w-7 h-7 text-primary" />
        </button>
      </div>

     
      {open && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-[1px] z-40"></div>
      )}

   
      <div
        id="mobile-drawer"
        className={`fixed top-0 right-0 h-full w-2/3 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
      
        <div className="flex items-center justify-between p-4 border-b">
          <div className="relative h-[38px] w-[140px]">
            <Image
              src="/Images/logo.png"
              alt="Logo"
              fill
            />
          </div>

          <button onClick={() => setOpen(false)}>
            <X className="w-7 h-7 text-primary" />
          </button>
        </div>

     
        <div className="flex flex-col gap-4 p-6 text-[18px] font-medium text-primary">
          <Link
            href="#"
            onClick={() => setOpen(false)}
            className="hover:text-secondary transition"
          >
            How it works
          </Link>

          <Link
            href="#"
            onClick={() => setOpen(false)}
            className="hover:text-secondary transition"
          >
            Pricing
          </Link>

          <Link
            href="#"
            onClick={() => setOpen(false)}
            className="hover:text-secondary transition"
          >
            Why us
          </Link>

        
          <button className="secondary-btn h-fit w-full" onClick={() => setOpen(false)}>
            Login
          </button>

          <button className="primary-btn h-fit w-full" onClick={() => setOpen(false)}>
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
