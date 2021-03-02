declare namespace jdk {
  namespace nashorn {
    namespace api {
      namespace scripting {

        class ScriptUtils {
          public static parse(arg0: java.lang.String, arg1: java.lang.String, arg2: boolean): java.lang.String
          public static format(arg0: java.lang.String, arg1: java.lang.Object[]): java.lang.String
          public static makeSynchronizedFunction(arg0: java.lang.Object, arg1: java.lang.Object): java.lang.Object
          public static wrap(arg0: java.lang.Object): jdk.nashorn.api.scripting.ScriptObjectMirror
          public static unwrap(arg0: java.lang.Object): java.lang.Object
          public static wrapArray(arg0: java.lang.Object[]): java.lang.Object[]
          public static unwrapArray(arg0: java.lang.Object[]): java.lang.Object[]
          public static convert(arg0: java.lang.Object, arg1: java.lang.Object): java.lang.Object
        }

      }
    }
  }
}
