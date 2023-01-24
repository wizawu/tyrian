declare namespace javax {
  namespace print {
    namespace attribute {
      abstract class SetOfIntegerSyntax implements java.io.Serializable, java.lang.Cloneable {
        protected constructor(arg0: java.lang.String | string)
        protected constructor(arg0: number[][] | java.lang.Integer[][])
        protected constructor(arg0: number | java.lang.Integer)
        protected constructor(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer)
        public getMembers(): number[][]
        public contains(arg0: number | java.lang.Integer): boolean
        public contains(arg0: javax.print.attribute.IntegerSyntax): boolean
        public next(arg0: number | java.lang.Integer): number
        public equals(arg0: java.lang.Object | any): boolean
        public hashCode(): number
        public toString(): java.lang.String
      }
    }
  }
}
