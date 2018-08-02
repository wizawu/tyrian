declare namespace sun {
    namespace awt {
        namespace X11 {
            class Depth extends sun.awt.X11.XWrapperBase {
                public static getSize(): int
                public getDataSize(): int
                public getPData(): long
                public constructor(arg0: long)
                public constructor()
                public dispose(): void
                public get_depth(): int
                public set_depth(arg0: int): void
                public get_nvisuals(): int
                public set_nvisuals(arg0: int): void
                public get_visuals(arg0: int): sun.awt.X11.Visual
                public get_visuals(): long
                public set_visuals(arg0: long): void
                public clone(): sun.awt.X11.XEvent
                public zero(): void
                public toString(): string
                public static class: java.lang.Class<any>
            }
        }
    }
}