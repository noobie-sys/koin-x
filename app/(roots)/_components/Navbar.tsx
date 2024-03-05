import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-20 bg-muted-foreground/5">
      <div className="w-full h-full flex justify-between items-center px-10">
        <div className="logo w-fit">KoinX</div>
        <div className="right-nav w-full flex justify-end items-center ">
          <div className="md:flex justify-between items-center gap-x-10 hidden">
            <Link href={"/"}>Crypto Taxes</Link>
            <Link href={"/"}>Free Tools</Link>
            <Link href={"/"}>Resource Center</Link>
            <Button className="px-10 ml-10">Get Started</Button>
          </div>
          <div className="md:hidden cursor-pointer">
            <Menu className="w-7 h-7" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
