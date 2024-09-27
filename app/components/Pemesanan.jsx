import Link from "next/link";

export default function Pemesanan() {
    return (
        <section className="w-full xl:w-[1200px] xl:mx-auto p-2 xl:py-12  xl:px-6  ">
            <div className="mx-auto bg-slate-100 xl:flex justify-between items-center  dark:bg-gray-900 p-8 xl:p-20 shadow-sm rounded-lg">
                <div className="p-2  text-center xl:text-left">
                    <h3 className="font-semibold text-xl xl:text-[40px] mb-4 dark:text-gray-100">Coba layanan Kami Sekarang</h3>
                    <p className="mb-4 dark:text-gray-100">
                        Klik tombol di pesan untuk memulai mencoba layanan!
                    </p>
                </div>
                <Link href="/order" className="bg-purple-800 text-white px-6 py-4 rounded-full hover:bg-purple-900 flex justify-center">
                    Pesan Sekarang
                </Link>
            </div>
        </section>
    );
}
