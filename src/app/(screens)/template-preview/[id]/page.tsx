"use client";

import { useRouter } from "next/navigation";
import { useState, useContext } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TemplateContext } from "@/context";
import { ArrowLeft, Download, ZoomIn, ZoomOut } from "lucide-react";
import jsPDF from "jspdf";
import { useToast } from "@/hooks";

const TemplatePreview = () => {
    // @ts-ignore
    const { selectedTemplate } = useContext(TemplateContext);
    const router = useRouter();
    const { toast } = useToast();

    const [zoom, setZoom] = useState(100);
    const [formData, setFormData] = useState({
        brideNames: "",
        groomNames: "",
        date: "",
        venue: "",
        message: "",
    });

    if (!selectedTemplate) {
        return (
            <div className="flex h-screen items-center justify-center">
                <p>Template not found. Please select a template from the homepage.</p>
            </div>
        );
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleZoom = (direction: "in" | "out") => {
        setZoom((prev) => {
            const newZoom = direction === "in" ? prev + 10 : prev - 10;
            return Math.min(Math.max(newZoom, 50), 200);
        });
    };

    const exportToPDF = () => {
        const pdf = new jsPDF();

        pdf.addImage(selectedTemplate.image, "JPEG", 15, 15, 180, 240);
        pdf.setFontSize(16);
        pdf.text(
            formData.brideNames + " & " + formData.groomNames,
            105,
            100,
            { align: "center" }
        );
        pdf.setFontSize(12);
        pdf.text(formData.date, 105, 120, { align: "center" });
        pdf.text(formData.venue, 105, 130, { align: "center" });
        pdf.text(formData.message, 105, 150, { align: "center" });
        pdf.save("wedding-invitation.pdf");

        toast({
            title: "Success!",
            description: "Your wedding invitation has been exported as PDF.",
        });
    };

    return (
        <div className="min-h-screen bg-wedding-pink p-6">
            <div className="mx-auto max-w-7xl">
                <Button variant="outline" className="mb-6" onClick={() => router.push("/")}>
                    <ArrowLeft className="mr-2" /> Back to Templates
                </Button>

                <div className="grid gap-8 lg:grid-cols-2">
                    <div className="relative rounded-lg bg-white p-6 shadow-lg">
                        <div className="mb-4 flex justify-end gap-2">
                            <Button variant="outline" size="icon" onClick={() => handleZoom("out")} disabled={zoom <= 50}>
                                <ZoomOut />
                            </Button>
                            <Button variant="outline" size="icon" onClick={() => handleZoom("in")} disabled={zoom >= 200}>
                                <ZoomIn />
                            </Button>
                        </div>
                        <div className="overflow-auto">
                            <div
                                style={{
                                    transform: `scale(${zoom / 100})`,
                                    transformOrigin: "top left",
                                    transition: "transform 0.3s ease",
                                }}
                            >
                                <img
                                    src={selectedTemplate.image}
                                    alt={selectedTemplate.title}
                                    className="w-full rounded-lg"
                                />
                                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                                    <h2 className="font-playfair text-2xl font-bold">
                                        {formData.brideNames} & {formData.groomNames}
                                    </h2>
                                    <p className="mt-2">{formData.date}</p>
                                    <p className="mt-1">{formData.venue}</p>
                                    <p className="mt-4">{formData.message}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6 rounded-lg bg-white p-6 shadow-lg">
                        <h2 className="font-playfair text-2xl font-semibold text-wedding-navy">
                            Customize Your Invitation
                        </h2>
                        <div className="space-y-4">
                            <div>
                                <label className="mb-2 block text-sm font-medium">
                                    Bride & Groom Names
                                </label>
                                <Input
                                    name="brideNames"
                                    value={formData.brideNames}
                                    onChange={handleInputChange}
                                    placeholder="e.g., Sarah & John"
                                />
                            </div>
                            <div>
                                <label className="mb-2 block text-sm font-medium">Wedding Date</label>
                                <Input
                                    name="date"
                                    value={formData.date}
                                    onChange={handleInputChange}
                                    placeholder="e.g., June 15, 2024"
                                />
                            </div>
                            <div>
                                <label className="mb-2 block text-sm font-medium">Venue</label>
                                <Input
                                    name="venue"
                                    value={formData.venue}
                                    onChange={handleInputChange}
                                    placeholder="e.g., Grand Plaza Hotel"
                                />
                            </div>
                            <div>
                                <label className="mb-2 block text-sm font-medium">Custom Message</label>
                                <Input
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    placeholder="Enter your custom message"
                                />
                            </div>
                        </div>
                        <Button className="mt-6 w-full bg-slate-600 text-white hover:bg-slate-700" onClick={exportToPDF}>
                            <Download className="mr-2" /> Export to PDF
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TemplatePreview;