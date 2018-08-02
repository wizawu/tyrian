declare namespace java {
    namespace awt {
        namespace color {
            class ICC_ColorSpace extends java.awt.color.ColorSpace {
                public constructor(arg0: java.awt.color.ICC_Profile)
                public getProfile(): java.awt.color.ICC_Profile
                public toRGB(arg0: float[]): float[]
                public fromRGB(arg0: float[]): float[]
                public toCIEXYZ(arg0: float[]): float[]
                public fromCIEXYZ(arg0: float[]): float[]
                public getMinValue(arg0: int): float
                public getMaxValue(arg0: int): float
                public static class: java.lang.Class<any>
            }
        }
    }
}