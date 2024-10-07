export default function card({ children, imageSrc }) {
    return (
        <div className="border-1 bg-slate-200 dark:bg-gray-900 border-gray-600 shadow-md rounded-lg w-full xl:w-[24%]">
            {imageSrc && (
                <img
                    src={imageSrc}
                    alt="Header Image"
                    className="w-full h-32 object-cover rounded-t-lg"
                />
            )}
            <div className="py-6 px-3 text-center">
                {children}
            </div>
        </div>

    );
}