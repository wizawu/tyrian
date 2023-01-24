declare namespace java {
  namespace lang {
    namespace reflect {
      class Proxy implements java.io.Serializable {
        protected h: java.lang.reflect.InvocationHandler
        protected constructor(arg0: java.lang.reflect.InvocationHandler | java.lang.reflect.InvocationHandler$$lambda)
        public static getProxyClass(
          arg0: java.lang.ClassLoader,
          ...vargs: java.lang.Class<unknown>[]
        ): java.lang.Class<unknown>
        public static newProxyInstance(
          arg0: java.lang.ClassLoader,
          arg1: java.lang.Class<unknown>[],
          arg2: java.lang.reflect.InvocationHandler | java.lang.reflect.InvocationHandler$$lambda
        ): java.lang.Object
        public static isProxyClass(arg0: java.lang.Class<unknown>): boolean
        public static getInvocationHandler(arg0: java.lang.Object | any): java.lang.reflect.InvocationHandler
      }
    }
  }
}
