export interface Product {
    id: string;
    name: string;
    subName: string;
    price: string;
    description: string;
    folderPath: string;
    themeColor: string;
    gradient: string;
    features: string[];
    stats: { label: string; val: string }[];
    section1: { title: string; subtitle: string };
    section2: { title: string; subtitle: string };
    section3: { title: string; subtitle: string };
    section4: { title: string; subtitle: string };
    detailsSection: { title: string; description: string; imageAlt: string };
    freshnessSection: { title: string; description: string };
    buyNowSection: {
        price: string;
        unit: string;
        processingParams: string[];
        deliveryPromise: string;
        returnPolicy: string;
    };
}
export const products: Product[] = [
    {
        id: "icedcoffee",
        name: "Arctic Iced Coffee",
        subName: "Bold. Cold. Electric.",
        price: "₹160",
        description: "Single-Origin Espresso - Flash Chilled - Zero Preservatives",
        folderPath: "/images/icedcoffee",
        themeColor: "#6F4E37",
        gradient: "linear-gradient(135deg, #6F4E37 0%, #3E2723 100%)",
        features: ["Single-Origin Espresso", "Flash Chilled", "Zero Preservatives"],
        stats: [
            { label: "Sugar", val: "0g Added" },
            { label: "Beans", val: "100% Arabica" },
            { label: "Brew", val: "Cold Locked" }
        ],
        section1: { title: "Arctic Iced Coffee.", subtitle: "Bold. Cold. Electric." },
        section2: { title: "Espresso in motion.", subtitle: "Fresh shots collide with crystal-clear ice in a dramatic swirl." },
        section3: { title: "Cream meets intensity.", subtitle: "Velvety milk ribbons marble through dark roast depth." },
        section4: { title: "Never diluted. Never reheated.", subtitle: "" },
        detailsSection: {
            title: "Engineered Chill",
            description: "Precision-roasted Arabica beans extracted at peak pressure, then flash chilled within seconds. Large purified ice cubes preserve strength without watering the brew. Aroma stays locked. Crema stays alive.",
            imageAlt: "Iced Coffee Details"
        },
        freshnessSection: {
            title: "Cold Chain Integrity",
            description: "Brewed cold, sealed cold, delivered cold. No heat shock. No flavor loss. Every sip carries bold structure and clean finish."
        },
        buyNowSection: {
            price: "₹160",
            unit: "per 300ml bottle",
            processingParams: ["Flash Chilled", "Nitro-Sealed", "Zero Preservatives"],
            deliveryPromise: "Insulated delivery. Arrives chilled and ready.",
            returnPolicy: "Not satisfied? Instant replacement."
        }
    },
    {
        id: "mocha",
        name: "Midnight Mocha",
        subName: "Dark. Silky. Decadent.",
        price: "₹180",
        description: "Premium Cocoa - Arabica Espresso - Smooth Milk",
        folderPath: "/images/mocha",
        themeColor: "#4E342E",
        gradient: "linear-gradient(135deg, #4E342E 0%, #1B1B1B 100%)",
        features: ["Premium Cocoa", "Arabica Espresso", "Smooth Milk"],
        stats: [
            { label: "Cocoa", val: "100%" },
            { label: "Protein", val: "10g" },
            { label: "Dairy", val: "Optional" }
        ],
        section1: { title: "Midnight Mocha.", subtitle: "Dark. Silky. Decadent." },
        section2: { title: "Espresso meets cocoa.", subtitle: "Rich dark chocolate folds into bold cold espresso." },
        section3: { title: "Velvet texture.", subtitle: "Creamy body with a smooth, lingering finish." },
        section4: { title: "Indulgence without chaos.", subtitle: "" },
        detailsSection: {
            title: "Cocoa Depth",
            description: "We blend ethically sourced dark cocoa with flash-chilled espresso for layered complexity. Heavy body, low bitterness, refined sweetness. Built for thinkers and night grinders.",
            imageAlt: "Mocha Details"
        },
        freshnessSection: {
            title: "Cold Crafted",
            description: "No heat mixing. No syrup overload. Just real cocoa emulsified into cold espresso for natural richness."
        },
        buyNowSection: {
            price: "₹180",
            unit: "per 300ml bottle",
            processingParams: ["Cold Blended", "Low Sugar", "Premium Cocoa"],
            deliveryPromise: "Ships in eco-insulated chill boxes.",
            returnPolicy: "Love it or refund it."
        }
    },
    {
        id: "coldbrew",
        name: "Black Cold Brew",
        subName: "Pure. Strong. Unfiltered.",
        price: "₹170",
        description: "16-Hour Steep - Zero Sugar - High Caffeine",
        folderPath: "/images/coldbrew",
        themeColor: "#2C2C2C",
        gradient: "linear-gradient(135deg, #2C2C2C 0%, #000000 100%)",
        features: ["16-Hour Steep", "Zero Sugar", "High Caffeine"],
        stats: [
            { label: "Sugar", val: "0g" },
            { label: "Caffeine", val: "High" },
            { label: "Purity", val: "100%" }
        ],
        section1: { title: "Black Cold Brew.", subtitle: "Pure. Strong. Unfiltered." },
        section2: { title: "Slow extraction.", subtitle: "Coarsely ground beans steeped for 16 hours in cold water." },
        section3: { title: "Maximum clarity.", subtitle: "Low acidity. Clean punch. Deep roast character." },
        section4: { title: "Nothing added. Nothing hidden.", subtitle: "" },
        detailsSection: {
            title: "The Long Brew",
            description: "Patience defines this bottle. Slow steeping extracts bold caffeine structure without bitterness. The result is smooth but commanding — built for long coding nights and early morning discipline.",
            imageAlt: "Cold Brew Details"
        },
        freshnessSection: {
            title: "Sealed Strength",
            description: "Immediately filtered and cold bottled to preserve its sharp aroma and dark body. What you taste is pure extraction."
        },
        buyNowSection: {
            price: "₹170",
            unit: "per 300ml bottle",
            processingParams: ["16hr Steep", "No Additives", "Cold Bottled"],
            deliveryPromise: "Fresh batch dispatch within 24 hours.",
            returnPolicy: "Damaged? We replace it."
        }
    }
];
