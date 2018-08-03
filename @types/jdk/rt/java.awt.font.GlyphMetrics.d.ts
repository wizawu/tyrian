declare namespace java {
    namespace awt {
        namespace font {
            class GlyphMetrics {
                public static readonly STANDARD: byte
                public static readonly LIGATURE: byte
                public static readonly COMBINING: byte
                public static readonly COMPONENT: byte
                public static readonly WHITESPACE: byte
                public constructor(arg0: float, arg1: java.awt.geom.Rectangle2D, arg2: byte)
                public constructor(arg0: boolean, arg1: float, arg2: float, arg3: java.awt.geom.Rectangle2D, arg4: byte)
                public getAdvance(): float
                public getAdvanceX(): float
                public getAdvanceY(): float
                public getBounds2D(): java.awt.geom.Rectangle2D
                public getLSB(): float
                public getRSB(): float
                public getType(): int
                public isStandard(): boolean
                public isLigature(): boolean
                public isCombining(): boolean
                public isComponent(): boolean
                public isWhitespace(): boolean
                public static class: java.lang.Class<any>
            }
        }
    }
}