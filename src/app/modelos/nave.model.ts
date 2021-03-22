export class Nave {
    id: string;
    name: string;
    description: string;
    type: string;
    success_rate_pct: number;
    cost_per_launch: number;
    active: boolean;
    country: string;
    company: string;
    stages: number;
    boosters: number;
    flickr_images: string[];
    wikipedia: string;
    height: Map<string, number>;
    diameter: Map<string, number>;
    mass: Map<string, number>;
}
