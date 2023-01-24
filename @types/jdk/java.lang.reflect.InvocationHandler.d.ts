declare namespace java {
  namespace lang {
    namespace reflect {
      interface InvocationHandler$$lambda {
        (arg0: java.lang.Object | any, arg1: java.lang.reflect.Method, arg2: java.lang.Object[] | any[]):
          | java.lang.Object
          | any
      }

      interface InvocationHandler {
        invoke(
          arg0: java.lang.Object | any,
          arg1: java.lang.reflect.Method,
          arg2: java.lang.Object[] | any[]
        ): java.lang.Object
      }
    }
  }
}
