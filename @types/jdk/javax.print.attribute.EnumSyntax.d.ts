declare namespace javax {
  namespace print {
    namespace attribute {

      abstract class EnumSyntax implements java.io.Serializable, java.lang.Cloneable {

        protected constructor(arg0: int)
        public getValue(): int
        public clone(): java.lang.Object
        public hashCode(): int
        public toString(): java.lang.String
        protected readResolve(): java.lang.Object
        protected getStringTable(): java.lang.String[]
        protected getEnumValueTable(): javax.print.attribute.EnumSyntax[]
        protected getOffset(): int
      }

    }
  }
}
