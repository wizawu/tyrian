declare namespace jdk {
  namespace nashorn {
    namespace api {
      namespace scripting {
        class ScriptUtils {
          public static parse(
            arg0: java.lang.String | string,
            arg1: java.lang.String | string,
            arg2: boolean | java.lang.Boolean
          ): java.lang.String
          public static format(arg0: java.lang.String | string, arg1: java.lang.Object[] | any[]): java.lang.String
          public static makeSynchronizedFunction(
            arg0: java.lang.Object | any,
            arg1: java.lang.Object | any
          ): java.lang.Object
          public static wrap(arg0: java.lang.Object | any): jdk.nashorn.api.scripting.ScriptObjectMirror
          public static unwrap(arg0: java.lang.Object | any): java.lang.Object
          public static wrapArray(arg0: java.lang.Object[] | any[]): java.lang.Object[]
          public static unwrapArray(arg0: java.lang.Object[] | any[]): java.lang.Object[]
          public static convert(arg0: java.lang.Object | any, arg1: java.lang.Object | any): java.lang.Object
        }
      }
    }
  }
}
