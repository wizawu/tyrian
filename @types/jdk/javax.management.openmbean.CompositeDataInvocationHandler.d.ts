declare namespace javax {
  namespace management {
    namespace openmbean {
      class CompositeDataInvocationHandler implements java.lang.reflect.InvocationHandler {
        static readonly $assertionsDisabled: boolean
        public constructor(arg0: javax.management.openmbean.CompositeData)
        constructor(arg0: javax.management.openmbean.CompositeData, arg1: com.sun.jmx.mbeanserver.MXBeanLookup)
        public getCompositeData(): javax.management.openmbean.CompositeData
        public invoke(
          arg0: java.lang.Object | any,
          arg1: java.lang.reflect.Method,
          arg2: java.lang.Object[] | any[]
        ): java.lang.Object
      }
    }
  }
}
