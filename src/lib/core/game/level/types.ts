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
        speed?: number;
    }>
    victory: {
        width: number;
        height: number;
        x: number;
        y: number;
    },
    textures: {
        backgroundPath: string;
        platformPath: string;
        rocketPath: string;
        victoryBoxPath: string;
    }
}