declare namespace java {
    namespace awt {
        namespace color {
            class ICC_ProfileRGB extends java.awt.color.ICC_Profile {
                public static readonly REDCOMPONENT: int
                public static readonly GREENCOMPONENT: int
                public static readonly BLUECOMPONENT: int
                public getMediaWhitePoint(): float[]
                public getMatrix(): float[][]
                public getGamma(arg0: int): float
                public getTRC(arg0: int): short[]
                public static class: java.lang.Class<any>
            }
        }
    }
}