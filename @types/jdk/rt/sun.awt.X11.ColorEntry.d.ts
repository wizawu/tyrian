declare namespace sun {
    namespace awt {
        namespace X11 {
            class ColorEntry extends sun.awt.X11.XWrapperBase {
                public static getSize(): int
                public getDataSize(): int
                public getPData(): long
                public constructor(arg0: long)
                public constructor()
                public dispose(): void
                public get_r(): byte
                public set_r(arg0: byte): void
                public get_g(): byte
                public set_g(arg0: byte): void
                public get_b(): byte
                public set_b(arg0: byte): void
                public get_flags(): byte
                public set_flags(arg0: byte): void
                public clone(): sun.awt.X11.XEvent
                public zero(): void
                public toString(): string
                public static class: java.lang.Class<any>
            }
        }
    }
}