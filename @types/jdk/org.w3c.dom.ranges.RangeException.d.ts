declare namespace org {
  namespace w3c {
    namespace dom {
      namespace ranges {

        class RangeException extends java.lang.RuntimeException {
          public code: short
          public static readonly BAD_BOUNDARYPOINTS_ERR: short
          public static readonly INVALID_NODE_TYPE_ERR: short
          public constructor(arg0: short, arg1: java.lang.String)
        }

      }
    }
  }
}
