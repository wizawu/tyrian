declare namespace javax {
  namespace script {

    interface Invocable {
      invokeMethod(arg0: java.lang.Object | any, arg1: java.lang.String | string, ...vargs: (java.lang.Object | any)[]): java.lang.Object
      invokeFunction(arg0: java.lang.String | string, ...vargs: (java.lang.Object | any)[]): java.lang.Object
      getInterface<T>(arg0: java.lang.Class<T>): T
      getInterface<T>(arg0: java.lang.Object | any, arg1: java.lang.Class<T>): T
    }

  }
}
