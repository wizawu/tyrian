declare namespace javax {
    namespace swing {
        namespace text {
            class DefaultStyledDocument$ElementSpec {
                public static StartTagType: short
                public static EndTagType: short
                public static ContentType: short
                public static JoinPreviousDirection: short
                public static JoinNextDirection: short
                public static OriginateDirection: short
                public static JoinFractureDirection: short
                public constructor(arg0: javax.swing.text.AttributeSet, arg1: short)
                public constructor(arg0: javax.swing.text.AttributeSet, arg1: short, arg2: int)
                public constructor(arg0: javax.swing.text.AttributeSet, arg1: short, arg2: char[], arg3: int, arg4: int)
                public setType(arg0: short): void
                public getType(): short
                public setDirection(arg0: short): void
                public getDirection(): short
                public getAttributes(): javax.swing.text.AttributeSet
                public getArray(): char[]
                public getOffset(): int
                public getLength(): int
                public toString(): string
                public static class: java.lang.Class<any>
            }
        }
    }
}