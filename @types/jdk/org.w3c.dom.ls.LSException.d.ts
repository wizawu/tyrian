declare namespace org {
  namespace w3c {
    namespace dom {
      namespace ls {
        class LSException extends java.lang.RuntimeException {
          public code: short
          public static readonly PARSE_ERR: short
          public static readonly SERIALIZE_ERR: short
          public constructor(arg0: number | java.lang.Short, arg1: java.lang.String | string)
        }
      }
    }
  }
}
