declare namespace javax {
  namespace xml {
    namespace validation {

      abstract class TypeInfoProvider {
        protected constructor()
        public abstract getElementTypeInfo(): org.w3c.dom.TypeInfo
        public abstract getAttributeTypeInfo(arg0: int): org.w3c.dom.TypeInfo
        public abstract isIdAttribute(arg0: int): boolean
        public abstract isSpecified(arg0: int): boolean
      }

    }
  }
}
