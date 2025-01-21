export interface Template {
    id: number;
    title: string;
    category: 'Traditional' | 'Modern' | 'Rustic' | 'Minimalist';
    image: string;
    description: string;
  }
  
  export const templates: Template[] = [
    {
      id: 1,
      title: "Elegant Roses",
      category: "Traditional",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
      description: "A classic design featuring elegant roses and traditional typography",
    },
    {
      id: 2,
      title: "Modern Minimalist",
      category: "Minimalist",
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb",
      description: "Clean lines and modern typography for the contemporary couple",
    },
    {
      id: 3,
      title: "Nature's Beauty",
      category: "Rustic",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      description: "Rustic charm with natural elements and handcrafted details",
    },
    {
      id: 4,
      title: "Mountain Romance",
      category: "Modern",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
      description: "Bold and dramatic design inspired by mountain landscapes",
    },
  ];