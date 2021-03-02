declare namespace java {
  namespace beans {
    namespace beancontext {

      interface BeanContext extends java.beans.beancontext.BeanContextChild, java.util.Collection, java.beans.DesignMode, java.beans.Visibility {
        public static readonly globalHierarchyLock: java.lang.Object
        instantiateChild(arg0: java.lang.String): java.lang.Object
        getResourceAsStream(arg0: java.lang.String, arg1: java.beans.beancontext.BeanContextChild): java.io.InputStream
        getResource(arg0: java.lang.String, arg1: java.beans.beancontext.BeanContextChild): java.net.URL
        addBeanContextMembershipListener(arg0: java.beans.beancontext.BeanContextMembershipListener): void
        removeBeanContextMembershipListener(arg0: java.beans.beancontext.BeanContextMembershipListener): void
      }

    }
  }
}
