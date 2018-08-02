declare namespace sun {
    namespace awt {
        namespace X11 {
class AwtScreenData extends sun.awt.X11.XWrapperBase {
    public static getSize(): int
    public getDataSize(): int
    public getPData(): long
    public constructor(arg0: long)
    public constructor()
    public dispose(): void
    public get_numConfigs(): int
    public set_numConfigs(arg0: int): void
    public get_root(): long
    public set_root(arg0: long): void
    public get_whitepixel(): long
    public set_whitepixel(arg0: long): void
    public get_blackpixel(): long
    public set_blackpixel(arg0: long): void
    public get_defaultConfig(arg0: int): sun.awt.X11.AwtGraphicsConfigData
    public get_defaultConfig(): long
    public set_defaultConfig(arg0: long): void
    public get_configs(arg0: int): long
    public get_configs(): long
    public set_configs(arg0: long): void
    public clone(): sun.awt.X11.XEvent
    public zero(): void
    public toString(): string
    public static class: java.lang.Class<any>
}

        }
    }
}