declare namespace java {
  namespace lang {
    namespace invoke {

      class MethodHandleProxies {
        static readonly $assertionsDisabled: boolean
        public static asInterfaceInstance<T>(arg0: java.lang.Class<T>, arg1: java.lang.invoke.MethodHandle): T
        public static isWrapperInstance(arg0: java.lang.Object): boolean
        public static wrapperInstanceTarget(arg0: java.lang.Object): java.lang.invoke.MethodHandle
        public static wrapperInstanceType(arg0: java.lang.Object): java.lang.Class<unknown>
      }

    }
  }
}
