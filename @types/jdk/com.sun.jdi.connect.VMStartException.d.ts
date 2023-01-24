declare namespace com {
  namespace sun {
    namespace jdi {
      namespace connect {
        class VMStartException extends java.lang.Exception {
          process: java.lang.Process
          public constructor(arg0: java.lang.Process)
          public constructor(arg0: java.lang.String | string, arg1: java.lang.Process)
          public process(): java.lang.Process
        }
      }
    }
  }
}
