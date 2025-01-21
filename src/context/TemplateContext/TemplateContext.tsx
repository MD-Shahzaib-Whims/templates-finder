"use client";
import { Template } from "@/data/templates";
import { createContext, useState, ReactNode } from "react";

interface TemplateContextType {
    selectedTemplate: Template | null;
    setSelectedTemplate: (template: Template) => void;
}

export const TemplateContext = createContext<TemplateContextType | undefined>(undefined);

export const TemplateProvider = ({ children }: { children: ReactNode }) => {
    const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);

    return (
        <TemplateContext.Provider value={{ selectedTemplate, setSelectedTemplate }}>
            {children}
        </TemplateContext.Provider>
    );
};