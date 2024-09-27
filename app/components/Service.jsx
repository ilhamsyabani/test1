import Card from "./Card";

export default function Service() {
    return (
        <div className="flex flex-col xl:flex-row items-center justify-center mt-4 mb-4 xl:mt-12 xl:mb-12 mx-auto w-[90%] xl:w-[1200px] gap-6">
            <Card>Google AdsWord</Card>
            <Card>Facebook Ads</Card>
            <Card>SEO</Card>
            <Card>Training</Card>
        </div>
    );
}
