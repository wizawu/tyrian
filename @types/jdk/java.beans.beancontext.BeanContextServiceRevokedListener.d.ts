declare namespace java {
  namespace beans {
    namespace beancontext {
      interface BeanContextServiceRevokedListener$$lambda {
        (arg0: java.beans.beancontext.BeanContextServiceRevokedEvent): void
      }

      interface BeanContextServiceRevokedListener extends java.util.EventListener {
        serviceRevoked(arg0: java.beans.beancontext.BeanContextServiceRevokedEvent): void
      }
    }
  }
}
