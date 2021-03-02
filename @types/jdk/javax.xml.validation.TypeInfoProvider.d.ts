declare namespace javax {
  namespace xml {
    namespace validation {

      abstract class TypeInfoProvider {
        protected constructor()
        public abstract getElementTypeInfo(): org.w3c.dom.TypeInfo
        public abstract getAttributeTypeInfo(arg0: number | java.lang.Integer): org.w3c.dom.TypeInfo
        public abstract isIdAttribute(arg0: number | java.lang.Integer): boolean
        public abstract isSpecified(arg0: number | java.lang.Integer): boolean
      }

    }
  }
}
