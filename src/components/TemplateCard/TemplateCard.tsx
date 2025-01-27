"use client"
import { useContext } from "react";
import { Card } from "@/components/ui/card";
import { Template } from "@/data/templates";
import { TemplateContext } from "@/context";
import { useRouter } from "next/navigation";

interface TemplateCardProps extends Template {
    onClick?: () => void;
}

const TemplateCard = ({ id, title, image, category, description }: TemplateCardProps) => {
    const router = useRouter();
    const { setSelectedTemplate } = useContext(TemplateContext);

    const handleClick = () => {
        setSelectedTemplate({ id, title, image, category, description });
        router.push(`/template-preview/${id}`);
    };

    return (
        <Card
            className="group cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-lg"
            onClick={handleClick}
        >
            <div className="aspect-[3/4] overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </div>
            <div className="p-4">
                <h3 className="font-playfair text-lg font-semibold text-wedding-navy">{title}</h3>
                <p className="mt-1 text-sm text-gray-500">{category}</p>
                <p className="mt-2 text-sm text-gray-600 line-clamp-2">{description}</p>
            </div>
        </Card>
    );
};

export default TemplateCard;