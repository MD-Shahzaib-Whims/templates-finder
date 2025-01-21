"use client";
import { useState } from "react";
import { templates, Template } from "@/data/templates";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import TemplateCard from "../TemplateCard/TemplateCard";

const TemplateGrid = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>("all");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredTemplates = templates.filter((template) => {
        const matchesCategory = selectedCategory === "all" || template.category === selectedCategory;
        const matchesSearch = template.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            template.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="space-y-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <Input
                    placeholder="Search templates..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="max-w-xs"
                />
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger className="max-w-[200px]">
                        <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Categories</SelectItem>
                        <SelectItem value="Traditional">Traditional</SelectItem>
                        <SelectItem value="Modern">Modern</SelectItem>
                        <SelectItem value="Rustic">Rustic</SelectItem>
                        <SelectItem value="Minimalist">Minimalist</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filteredTemplates.map((template) => (
                    <TemplateCard
                        key={template.id}
                        onClick={() => console.log(`Selected template: ${template.id}`)}
                        {...template}
                    />
                ))}
            </div>

            {filteredTemplates.length === 0 && (
                <p className="text-center text-gray-500">No templates found matching your criteria.</p>
            )}
        </div>
    );
};

export default TemplateGrid;