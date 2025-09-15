"use client";
import Image from "next/image";
import { useState } from "react";

function Nav() {
  const [active, setActive] = useState("home");

  const items = [
    { id: "home", icon: "/home.svg", alt: "Home" },
    { id: "gallery", icon: "/gallery.svg", alt: "Gallery" },
    { id: "video", icon: "/video.svg", alt: "Video" },
    { id: "wand", icon: "/wand.svg", alt: "Wand" },
    { id: "brush", icon: "/brush.svg", alt: "Brush" },
    { id: "pen", icon: "/pen.svg", alt: "Pen" },
    { id: "folder", icon: "/folder.svg", alt: "Folder" },
  ];

  return (
    <nav className="flex justify-between items-center pt-2 px-2">
      <div className="flex items-center gap-3">
        <Image src="/logo.svg" alt="logo" width="17" height="17" />
        <div className="flex gap-2 items-center rounded-2xl p-1 bg-gray-200">
          <div className="w-5 h-5 rounded-full bg-gradient-to-r from-purple-400 to-indigo-400"></div>
          <h1 className="text-xs font-thin tracking-tight">
            Benevolentnimbilebat
          </h1>
          &#9662;
        </div>
      </div>

      <div className="bg-gray-200 p-1 rounded-2xl hidden sm:flex gap-2">
        {items.map((item) => (
          <div
            key={item.id}
            onClick={() => setActive(item.id)}
            className={`w-fit p-2 rounded-xl cursor-pointer ${
              active === item.id ? "bg-white" : "hover:bg-white"
            }`}
          >
            <Image src={item.icon} alt={item.alt} width={15} height={15} />
          </div>
        ))}
      </div>

      <div className="hidden lg:flex gap-2">
        <div className="flex gap-1 items-center cursor-pointer bg-gray-300 p-2 rounded-2xl">
          <Image src="./gallery.svg" alt="gallery" width="15" height="15" />
          <h1 className="text-xs">Gallery</h1>
        </div>
        <div className="flex gap-1 items-center cursor-pointer bg-gray-300 p-2 rounded-2xl">
          <Image src="./support.svg" alt="support" width="15" height="15" />
          <h1 className="text-xs tracking-tight">Support </h1>
        </div>

        <div className=" bg-gray-300 p-2 rounded-full flex items-center">
          <Image src="./alarm.svg" alt="alarm" width="15" height="15" />
        </div>

        <div className=" bg-gray-300 p-2 rounded-full flex items-center">
          <Image src="./sun.svg" alt="sun" width="15" height="15" />
        </div>
        <div className="w-7 h-7 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600"></div>
      </div>
    </nav>
  );
}

export default Nav;
