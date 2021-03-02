declare namespace com {
  namespace sun {
    namespace jdi {
      namespace connect {

        class IllegalConnectorArgumentsException extends java.lang.Exception {
          names: java.util.List<java.lang.String>
          public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
          public constructor(arg0: java.lang.String | string, arg1: java.util.List<java.lang.String>)
          public argumentNames(): java.util.List<java.lang.String>
        }

      }
    }
  }
}
