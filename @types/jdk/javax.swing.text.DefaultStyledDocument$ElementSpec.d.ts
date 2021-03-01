declare namespace javax {
  namespace swing {
    namespace text {

      class DefaultStyledDocument$ElementSpec {

        public static readonly StartTagType: short
        public static readonly EndTagType: short
        public static readonly ContentType: short
        public static readonly JoinPreviousDirection: short
        public static readonly JoinNextDirection: short
        public static readonly OriginateDirection: short
        public static readonly JoinFractureDirection: short
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
        public toString(): java.lang.String
      }

    }
  }
}
