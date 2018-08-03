declare namespace java {
    namespace awt {
        class AlphaComposite implements java.awt.Composite {
            public static readonly CLEAR: int
            public static readonly SRC: int
            public static readonly DST: int
            public static readonly SRC_OVER: int
            public static readonly DST_OVER: int
            public static readonly SRC_IN: int
            public static readonly DST_IN: int
            public static readonly SRC_OUT: int
            public static readonly DST_OUT: int
            public static readonly SRC_ATOP: int
            public static readonly DST_ATOP: int
            public static readonly XOR: int
            public static readonly Clear: java.awt.AlphaComposite
            public static readonly Src: java.awt.AlphaComposite
            public static readonly Dst: java.awt.AlphaComposite
            public static readonly SrcOver: java.awt.AlphaComposite
            public static readonly DstOver: java.awt.AlphaComposite
            public static readonly SrcIn: java.awt.AlphaComposite
            public static readonly DstIn: java.awt.AlphaComposite
            public static readonly SrcOut: java.awt.AlphaComposite
            public static readonly DstOut: java.awt.AlphaComposite
            public static readonly SrcAtop: java.awt.AlphaComposite
            public static readonly DstAtop: java.awt.AlphaComposite
            public static readonly Xor: java.awt.AlphaComposite
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
    }
}