declare namespace java {
  namespace beans {
    namespace beancontext {

      class BeanContextServiceRevokedEvent extends java.beans.beancontext.BeanContextEvent {
        protected serviceClass: java.lang.Class<unknown>
        public constructor(arg0: java.beans.beancontext.BeanContextServices, arg1: java.lang.Class<unknown>, arg2: boolean | java.lang.Boolean)
        public getSourceAsBeanContextServices(): java.beans.beancontext.BeanContextServices
        public getServiceClass(): java.lang.Class<unknown>
        public isServiceClass(arg0: java.lang.Class<unknown>): boolean
        public isCurrentServiceInvalidNow(): boolean
      }

    }
  }
}
