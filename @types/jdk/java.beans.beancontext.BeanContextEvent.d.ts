declare namespace java {
  namespace beans {
    namespace beancontext {

      abstract class BeanContextEvent extends java.util.EventObject {

        protected propagatedFrom: java.beans.beancontext.BeanContext
        protected constructor(arg0: java.beans.beancontext.BeanContext)
        public getBeanContext(): java.beans.beancontext.BeanContext
        public setPropagatedFrom(arg0: java.beans.beancontext.BeanContext): void
        public getPropagatedFrom(): java.beans.beancontext.BeanContext
        public isPropagated(): boolean
      }

    }
  }
}
