declare namespace org {
  namespace w3c {
    namespace dom {
      interface TypeInfo {
        readonly DERIVATION_RESTRICTION: int
        readonly DERIVATION_EXTENSION: int
        readonly DERIVATION_UNION: int
        readonly DERIVATION_LIST: int
        getTypeName(): java.lang.String
        getTypeNamespace(): java.lang.String
        isDerivedFrom(
          arg0: java.lang.String | string,
          arg1: java.lang.String | string,
          arg2: number | java.lang.Integer
        ): boolean
      }
    }
  }
}
