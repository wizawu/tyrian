declare namespace java {
  namespace beans {
    namespace beancontext {

      class BeanContextMembershipEvent extends java.beans.beancontext.BeanContextEvent {
        protected children: java.util.Collection
        public constructor(arg0: java.beans.beancontext.BeanContext, arg1: java.util.Collection)
        public constructor(arg0: java.beans.beancontext.BeanContext, arg1: java.lang.Object[] | any[])
        public size(): number
        public contains(arg0: java.lang.Object | any): boolean
        public toArray(): java.lang.Object[]
        public iterator(): java.util.Iterator
      }

    }
  }
}
