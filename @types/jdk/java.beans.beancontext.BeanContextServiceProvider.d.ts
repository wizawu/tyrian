declare namespace java {
  namespace beans {
    namespace beancontext {
      interface BeanContextServiceProvider {
        getService(
          arg0: java.beans.beancontext.BeanContextServices,
          arg1: java.lang.Object | any,
          arg2: java.lang.Class<unknown>,
          arg3: java.lang.Object | any
        ): java.lang.Object
        releaseService(
          arg0: java.beans.beancontext.BeanContextServices,
          arg1: java.lang.Object | any,
          arg2: java.lang.Object | any
        ): void
        getCurrentServiceSelectors(
          arg0: java.beans.beancontext.BeanContextServices,
          arg1: java.lang.Class<unknown>
        ): java.util.Iterator<unknown>
      }
    }
  }
}
