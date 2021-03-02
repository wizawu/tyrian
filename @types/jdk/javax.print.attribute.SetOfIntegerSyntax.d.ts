declare namespace javax {
  namespace print {
    namespace attribute {

      abstract class SetOfIntegerSyntax implements java.io.Serializable, java.lang.Cloneable {
        protected constructor(arg0: java.lang.String)
        protected constructor(arg0: int[][])
        protected constructor(arg0: int)
        protected constructor(arg0: int, arg1: int)
        public getMembers(): int[][]
        public contains(arg0: int): boolean
        public contains(arg0: javax.print.attribute.IntegerSyntax): boolean
        public next(arg0: int): int
        public equals(arg0: java.lang.Object): boolean
        public hashCode(): int
        public toString(): java.lang.String
      }

    }
  }
}
