import { Marquee } from "@/components/ui/marquee";

const reviews = [
    {
        name: "Lorem Ipsum",
        username: "Lorem Ipsum",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae condimentum eros. Vestibulum in condimentum ex.",
    },
    {
        name: "Lorem Ipsum",
        username: "Lorem Ipsum",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae condimentum eros. Vestibulum in condimentum ex.",
    },
    {
        name: "Lorem Ipsum",
        username: "Lorem Ipsum",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae condimentum eros. Vestibulum in condimentum ex.",
    },
    {
        name: "Lorem Ipsum",
        username: "Lorem Ipsum",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae condimentum eros. Vestibulum in condimentum ex.",
    },
];

const ReviewCard = ({
    name,
    username,
    body,
}: {
    name: string;
    username: string;
    body: string;
}) => {
    return (
        <div className="flex flex-col gap-4 hover:scale-105 transition duration-300">
            <div className="w-[320px] rounded-[20px] border border-[#6E9C8D] bg-[#F4F4F4] p-5">
                <p className="text-sm leading-relaxed text-neutral-700">
                    {body}
                </p>
            </div>

            <div className="flex items-center gap-2 text-sm">
                <span className="font-medium text-neutral-800">
                    {name}
                </span>

                <span className="text-neutral-400">•</span>

                <span className="text-neutral-600">
                    {username}
                </span>
            </div>
        </div>
    );
};

export default function MarqueTestimoni() {
    return (
        <section className="relative w-full overflow-hidden py-12">
            <Marquee pauseOnHover className="[--duration:20s] cursor-pointer">
                {reviews.map((review, index) => (
                    <ReviewCard
                        key={index}
                        name={review.name}
                        username={review.username}
                        body={review.body}
                    />
                ))}
            </Marquee>

            {/* Fade kiri */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-linear-to-r from-[#F6EFD2] to-transparent" />

            {/* Fade kanan */}
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-linear-to-l from-[#F6EFD2] to-transparent" />
        </section>
    );
}