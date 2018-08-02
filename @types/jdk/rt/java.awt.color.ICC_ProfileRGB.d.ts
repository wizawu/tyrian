declare namespace java {
    namespace awt {
        namespace color {
            class ICC_ProfileRGB extends java.awt.color.ICC_Profile {
                public static REDCOMPONENT: int
                public static GREENCOMPONENT: int
                public static BLUECOMPONENT: int
                public getMediaWhitePoint(): float[]
                public getMatrix(): float[][]
                public getGamma(arg0: int): float
                public getTRC(arg0: int): short[]
                public static class: java.lang.Class<any>
            }
        }
    }
}