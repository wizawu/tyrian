declare namespace javax {
  namespace print {
    namespace attribute {
      abstract class EnumSyntax implements java.io.Serializable, java.lang.Cloneable {
        protected constructor(arg0: number | java.lang.Integer)
        public getValue(): number
        public clone(): java.lang.Object
        public hashCode(): number
        public toString(): java.lang.String
        protected readResolve(): java.lang.Object
        protected getStringTable(): java.lang.String[]
        protected getEnumValueTable(): javax.print.attribute.EnumSyntax[]
        protected getOffset(): number
      }
    }
  }
}
