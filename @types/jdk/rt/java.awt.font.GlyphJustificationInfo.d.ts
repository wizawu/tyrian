declare namespace java {
    namespace awt {
        namespace font {
            class GlyphJustificationInfo {
                public static readonly PRIORITY_KASHIDA: int
                public static readonly PRIORITY_WHITESPACE: int
                public static readonly PRIORITY_INTERCHAR: int
                public static readonly PRIORITY_NONE: int
                public readonly weight: float
                public readonly growPriority: int
                public readonly growAbsorb: boolean
                public readonly growLeftLimit: float
                public readonly growRightLimit: float
                public readonly shrinkPriority: int
                public readonly shrinkAbsorb: boolean
                public readonly shrinkLeftLimit: float
                public readonly shrinkRightLimit: float
                public constructor(arg0: float, arg1: boolean, arg2: int, arg3: float, arg4: float, arg5: boolean, arg6: int, arg7: float, arg8: float)
                public static class: java.lang.Class<any>
            }
        }
    }
}