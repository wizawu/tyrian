declare namespace sun {
    namespace awt {
        namespace X11 {
            class XPixmapFormatValues extends sun.awt.X11.XWrapperBase {
                public static getSize(): int
                public getDataSize(): int
                public getPData(): long
                public constructor(arg0: long)
                public constructor()
                public dispose(): void
                public get_depth(): int
                public set_depth(arg0: int): void
                public get_bits_per_pixel(): int
                public set_bits_per_pixel(arg0: int): void
                public get_scanline_pad(): int
                public set_scanline_pad(arg0: int): void
                public clone(): sun.awt.X11.XEvent
                public zero(): void
                public toString(): string
                public static class: java.lang.Class<any>
            }
        }
    }
}