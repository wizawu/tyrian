declare namespace sun {
    namespace font {
        abstract class TextSource {
            public static readonly WITHOUT_CONTEXT: boolean
            public static readonly WITH_CONTEXT: boolean
            public constructor()
            public abstract getChars(): char[]
            public abstract getStart(): int
            public abstract getLength(): int
            public abstract getContextStart(): int
            public abstract getContextLength(): int
            public abstract getLayoutFlags(): int
            public abstract getBidiLevel(): int
            public abstract getFont(): java.awt.Font
            public abstract getFRC(): java.awt.font.FontRenderContext
            public abstract getCoreMetrics(): sun.font.CoreMetrics
            public abstract getSubSource(arg0: int, arg1: int, arg2: int): sun.font.TextSource
            public abstract toString(arg0: boolean): string
            public static class: java.lang.Class<any>
        }
    }
}