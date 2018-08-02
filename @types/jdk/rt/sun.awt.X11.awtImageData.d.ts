declare namespace sun {
    namespace awt {
        namespace X11 {
            class awtImageData extends sun.awt.X11.XWrapperBase {
                public static getSize(): int
                public getDataSize(): int
                public getPData(): long
                public constructor(arg0: long)
                public constructor()
                public dispose(): void
                public get_Depth(): int
                public set_Depth(arg0: int): void
                public get_wsImageFormat(): sun.awt.X11.XPixmapFormatValues
                public get_clrdata(arg0: int): long
                public get_clrdata(): long
                public set_clrdata(arg0: long): void
                public get_convert(arg0: int): long
                public set_convert(arg0: int, arg1: long): void
                public get_convert(): long
                public clone(): sun.awt.X11.XEvent
                public zero(): void
                public toString(): string
                public static class: java.lang.Class<any>
            }
        }
    }
}