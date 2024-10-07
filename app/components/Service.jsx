import Card from "./Card";

export default function Service() {
    return (
        <div className="flex flex-col xl:flex-row items-center justify-center mt-4 mb-4 xl:mt-12 xl:mb-12 mx-auto w-[90%] xl:w-[1200px] gap-6">
            <Card imageSrc="./images/google.png">
                <h3 className="font-bold text-xl mb-2 text-gray-800 dark:text-gray-200">Google AdWords</h3>
                <p className="text-gray-600 dark:text-gray-400">Deskripsi konten di sini</p>
            </Card>
            <Card imageSrc="./images/meta.png">
                <h3 className="font-bold text-xl mb-2 text-gray-800 dark:text-gray-200">Meta Ads</h3>
                <p className="text-gray-600 dark:text-gray-400">Deskripsi konten di sini</p>
            </Card>
            <Card imageSrc="./images/seo.png">
                <h3 className="font-bold text-xl mb-2 text-gray-800 dark:text-gray-200">SEO</h3>
                <p className="text-gray-600 dark:text-gray-400">Deskripsi konten di sini</p>
            </Card>
            <Card imageSrc="./images/training.png">
                <h3 className="font-bold text-xl mb-2 text-gray-800 dark:text-gray-200">Training</h3>
                <p className="text-gray-600 dark:text-gray-400">Deskripsi konten di sini</p>
            </Card>
        </div>
    );
}
