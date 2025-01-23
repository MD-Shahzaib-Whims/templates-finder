"use client"
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Upload, X } from "lucide-react";
// import { toast } from "sonner";
import { useToast } from "@/hooks";

interface ImageUploadProps {
    onImageUpload: (file: File) => void;
}

const ImageUpload = ({ onImageUpload }: ImageUploadProps) => {
    const { toast } = useToast();
    const [preview, setPreview] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            if (file.size > 5 * 1024 * 1024) {
                // toast.error("File size should be less than 5MB");
                toast({
                    title: "Error",
                    // title: "File size too large",
                    description: "File size should be less than 5MB",
                });
                return;
            }

            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result as string);
            };
            reader.readAsDataURL(file);
            onImageUpload(file);
        }
    };

    const handleRemoveImage = () => {
        setPreview(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-center">
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                    ref={fileInputRef}
                />
                <Button
                    type="button"
                    variant="outline"
                    onClick={() => fileInputRef.current?.click()}
                    className="flex items-center gap-2"
                >
                    <Upload className="h-4 w-4" />
                    Upload Image
                </Button>
            </div>

            {preview && (
                <div className="relative">
                    <img
                        src={preview}
                        alt="Preview"
                        className="max-h-[300px] w-full rounded-lg object-contain"
                    />
                    <Button
                        variant="destructive"
                        size="icon"
                        className="absolute right-2 top-2"
                        onClick={handleRemoveImage}
                    >
                        <X className="h-4 w-4" />
                    </Button>
                </div>
            )}
        </div>
    );
};

export default ImageUpload;