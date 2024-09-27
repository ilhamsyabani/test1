export default function card({ children }) {
    return (
        <div className="border-1 bg-slate-200 dark:bg-gray-900 border-gray-600 shadow-md rounded-lg py-6 px-4 w-full xl:w-[24%]">
        <h3 className="font-bold text-xl mb-2 text-center text-gray-800 dark:text-gray-200">{children}</h3>
        <p className="text-gray-600 text-center dark:text-gray-400">Deskripsi konten di sini</p>
        <div className="mt-4 flex justify-center">
            <button className="bg-gray-800 text-white dark:text-gray-900 dark:bg-gray-200 py-2 px-4 rounded hover:bg-gray-800 dark:hover:text-gray-100 transition duration-200">
                Action Button
            </button>
        </div>
    </div>
    );
}