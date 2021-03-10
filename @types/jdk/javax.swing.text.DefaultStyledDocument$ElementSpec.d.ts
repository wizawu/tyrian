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
        public constructor(arg0: javax.swing.text.AttributeSet, arg1: number | java.lang.Short)
        public constructor(arg0: javax.swing.text.AttributeSet, arg1: number | java.lang.Short, arg2: number | java.lang.Integer)
        public constructor(arg0: javax.swing.text.AttributeSet, arg1: number | java.lang.Short, arg2: string[] | java.lang.Character[], arg3: number | java.lang.Integer, arg4: number | java.lang.Integer)
        public setType(arg0: number | java.lang.Short): void
        public getType(): number
        public setDirection(arg0: number | java.lang.Short): void
        public getDirection(): number
        public getAttributes(): javax.swing.text.AttributeSet
        public getArray(): string[]
        public getOffset(): number
        public getLength(): number
        public toString(): java.lang.String
      }

    }
  }
}
