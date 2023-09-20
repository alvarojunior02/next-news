import { CardNewsInterface } from "@/interfaces/CardNewsInterface";
import Image from "next/image";

export default function CardNews(article: CardNewsInterface) {
    return(
        <a className="w-full" href={article.url} target="_blank">
            <div className="border-2 p-4 my-4 w-full border-black rounded-xl flex flex-col justify-center items-center">
                <h1 className="text-xl text-center font-bold">{article.title}</h1>
                <p className="mt-4 text-center">{article.description}</p>
                <p className="mt-4 italic text-sm">{article.author}</p>
            </div>
        </a>
    )
}