declare namespace java {
    namespace awt {
        class AlphaComposite implements java.awt.Composite {
            public static CLEAR: int
            public static SRC: int
            public static DST: int
            public static SRC_OVER: int
            public static DST_OVER: int
            public static SRC_IN: int
            public static DST_IN: int
            public static SRC_OUT: int
            public static DST_OUT: int
            public static SRC_ATOP: int
            public static DST_ATOP: int
            public static XOR: int
            public static Clear: java.awt.AlphaComposite
            public static Src: java.awt.AlphaComposite
            public static Dst: java.awt.AlphaComposite
            public static SrcOver: java.awt.AlphaComposite
            public static DstOver: java.awt.AlphaComposite
            public static SrcIn: java.awt.AlphaComposite
            public static DstIn: java.awt.AlphaComposite
            public static SrcOut: java.awt.AlphaComposite
            public static DstOut: java.awt.AlphaComposite
            public static SrcAtop: java.awt.AlphaComposite
            public static DstAtop: java.awt.AlphaComposite
            public static Xor: java.awt.AlphaComposite
            public static getInstance(arg0: int): java.awt.AlphaComposite
            public static getInstance(arg0: int, arg1: float): java.awt.AlphaComposite
            public createContext(arg0: java.awt.image.ColorModel, arg1: java.awt.image.ColorModel, arg2: java.awt.RenderingHints): java.awt.CompositeContext
            public getAlpha(): float
            public getRule(): int
            public derive(arg0: int): java.awt.AlphaComposite
            public derive(arg0: float): java.awt.AlphaComposite
            public hashCode(): int
            public equals(arg0: java.lang.Object): boolean
            public static class: java.lang.Class<any>
        }
        class AlphaComposite$$Lambda implements java.awt.Composite {
            public static CLEAR: int
        }
    }
}