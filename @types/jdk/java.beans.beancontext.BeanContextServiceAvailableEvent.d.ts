declare namespace java {
  namespace beans {
    namespace beancontext {
      class BeanContextServiceAvailableEvent extends java.beans.beancontext.BeanContextEvent {
        protected serviceClass: java.lang.Class<unknown>
        public constructor(arg0: java.beans.beancontext.BeanContextServices, arg1: java.lang.Class<unknown>)
        public getSourceAsBeanContextServices(): java.beans.beancontext.BeanContextServices
        public getServiceClass(): java.lang.Class<unknown>
        public getCurrentServiceSelectors(): java.util.Iterator<unknown>
      }
    }
  }
}
