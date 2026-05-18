import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

export default function ServicePostObj({ ServiceCard }) {
    return (
        <div
            className="bg-brand-card/60 rounded-2xl p-5 flex flex-col items-center text-center">
            {/*<SanityImage
                image={ServiceCard.image}
                alt={`${ServiceCard.name} service`}
                width={400}
                height={400}
                className="w-full rounded-xl"
            />*/}
            <Image
                src={urlFor(ServiceCard.image).auto("format").size(1920, 1080).url()}
                width={400}
                height={400}
                alt={ServiceCard.name}
                className="w-full rounded-xl"
            />
            <h3 className="mt-4 font-semibold text-gray-800">
            {ServiceCard.name}
            </h3>
            <p className="text-brand-purple font-bold mt-1">
            {ServiceCard.price}
            </p>
            <button className="mt-3 text-xs text-brand-purple border border-brand-purple rounded-full px-5 py-1.5 hover:bg-brand-purple hover:text-white transition-colors">
            view more
            </button>
        </div>
    )
}