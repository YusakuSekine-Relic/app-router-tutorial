export type Pokemon = {
    url: string;
    id: number;
    name: string;
    types: [
        {
            type: {
                name: string;
            };
        }
    ],
    height: number,
    weight: number,
    stats: [
        {
            base_stat: number,
            stat: {
                name: string;
            };
        }
    ];
    sprites: {
        front_default: string;
    };
}
