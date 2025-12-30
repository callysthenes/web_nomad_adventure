export interface Tour {
    id: string;
    name: string;
    shortDesc: string;
    fullDesc: string;
    duration: string;
    difficulty: "Easy" | "Medium" | "Hard" | "Extreme";
    terrain: string[];
    imagePlaceholder: string;
}

export const tours: Tour[] = [
    {
        id: "morocco-atlas",
        name: "Morocco Atlas",
        shortDesc: "Conquer the soaring peaks of the High Atlas.",
        fullDesc: "Experience the majestic High Atlas mountains, crossing the famous Tizi n'Tichka pass and exploring remote Berber villages. This tour focuses on winding mountain roads, breathtaking vistas, and technical gravel tracks.",
        duration: "9 Days",
        difficulty: "Medium",
        terrain: ["Mountain Passes", "Gravel", "Tarmac"],
        imagePlaceholder: "Atlas Mountains Landscape"
    },
    {
        id: "morocco-mix",
        name: "Morocco Mix",
        shortDesc: "The perfect blend of mountains, gorges, and dunes.",
        fullDesc: "Our classic tour offering a bit of everything: the Atlas mountains, the Dades and Todra gorges, and the dunes of Merzouga. Ideal for riders wanting the complete Moroccan experience.",
        duration: "9 Days",
        difficulty: "Medium",
        terrain: ["Mixed", "Sand", "Rocks"],
        imagePlaceholder: "Desert & Mountain Mix"
    },
    {
        id: "morocco-west",
        name: "Morocco West",
        shortDesc: "Coastal breezes and Anti-Atlas curves.",
        fullDesc: "Explore the less-traveled western routes, from the painted rocks of Tafraoute to the Atlantic coastal roads. A more relaxed but equally stunning adventure.",
        duration: "8 Days",
        difficulty: "Easy",
        terrain: ["Coastal Roads", "Hard Pack", "Canyons"],
        imagePlaceholder: "Coastal Road"
    },
    {
        id: "senegal-adventure",
        name: "Senegal Expedition",
        shortDesc: "Deep sand and baobab forests.",
        fullDesc: "A true adventure crossing into West Africa. Experience the vibrant culture of Senegal, riding through vast savannahs, baobab forests, and pink lakes.",
        duration: "12 Days",
        difficulty: "Hard",
        terrain: ["Sand", "Savannah", "Mud"],
        imagePlaceholder: "Baobab Forest"
    },
    {
        id: "mauritania-crossing",
        name: "Mauritania Void",
        shortDesc: "The ultimate desert challenge.",
        fullDesc: "For expert riders only. We cross the endless dunes of Mauritania, ride the Iron Ore Train route, and camp under the purest stars on Earth. This is raw adventure.",
        duration: "14 Days",
        difficulty: "Extreme",
        terrain: ["Deep Sand", "Dunes", "Off-road"],
        imagePlaceholder: "Endless Dunes"
    }
];
