import React from "react";
import Link from "next/link";
export default function Layout({ children }) {
  return (
    <>
      <nav className="w-full z-50 bg-white text-black font-semibold px-[100px] py-4 fixed">
        <div className="flex justify-between">
          <Link href={"/"}>Febriqgal❤️</Link>
          <div className="flex flex-row gap-5">
            <Link className="hover:underline" href={"/provinsi"}>
              Daerah Indonesia
            </Link>
            <Link className="hover:underline" href={"/al-quran"}>
              {`Al-qur'an`}
            </Link>
            <Link className="hover:underline" href={"/dffd"}>
              Kontak
            </Link>
          </div>
        </div>
      </nav>
      <main>{children}</main>
    </>
  );
}
