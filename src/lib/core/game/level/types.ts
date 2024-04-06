export type LevelType = {
    speed: number;
    platforms: Array<{
        width: number;
        x: number;
        y: number;
    }>,
    rockets: Array<{
        x: number;
        y: number;
        extraSpeed?: number;
    }>
    textures: {
        backgroundPath: string;
        platformPath: string;
        rocketPath: string;
        exitPath: string;
    }

    platformGap: [number, number]
}