declare namespace javax {
    namespace swing {
        namespace text {
            class TabStop implements java.io.Serializable {
                public static ALIGN_LEFT: int
                public static ALIGN_RIGHT: int
                public static ALIGN_CENTER: int
                public static ALIGN_DECIMAL: int
                public static ALIGN_BAR: int
                public static LEAD_NONE: int
                public static LEAD_DOTS: int
                public static LEAD_HYPHENS: int
                public static LEAD_UNDERLINE: int
                public static LEAD_THICKLINE: int
                public static LEAD_EQUALS: int
                public constructor(arg0: float)
                public constructor(arg0: float, arg1: int, arg2: int)
                public getPosition(): float
                public getAlignment(): int
                public getLeader(): int
                public equals(arg0: java.lang.Object): boolean
                public hashCode(): int
                public toString(): string
                public static class: java.lang.Class<any>
            }
        }
    }
}