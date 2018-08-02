declare namespace sun {
    namespace java2d {
        namespace xr {
            class XRColor {
                public static FULL_ALPHA: sun.java2d.xr.XRColor
                public static NO_ALPHA: sun.java2d.xr.XRColor
                public constructor()
                public constructor(arg0: int, arg1: int, arg2: int, arg3: int)
                public constructor(arg0: java.awt.Color)
                public setColorValues(arg0: java.awt.Color): void
                public static ARGBPrePixelToXRColors(arg0: int[]): int[]
                public setColorValues(arg0: int, arg1: boolean): void
                public static byteToXRColorValue(arg0: int): int
                public toString(): string
                public setAlpha(arg0: int): void
                public getAlpha(): int
                public getRed(): int
                public getGreen(): int
                public getBlue(): int
                public static class: java.lang.Class<any>
            }
        }
    }
}