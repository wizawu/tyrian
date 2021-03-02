declare namespace org {
  namespace w3c {
    namespace dom {

      interface TypeInfo {
        public static readonly DERIVATION_RESTRICTION: int
        public static readonly DERIVATION_EXTENSION: int
        public static readonly DERIVATION_UNION: int
        public static readonly DERIVATION_LIST: int
        getTypeName(): java.lang.String
        getTypeNamespace(): java.lang.String
        isDerivedFrom(arg0: java.lang.String, arg1: java.lang.String, arg2: int): boolean
      }

    }
  }
}
