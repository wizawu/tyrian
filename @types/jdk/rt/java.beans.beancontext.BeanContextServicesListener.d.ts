declare namespace java {
    namespace beans {
        namespace beancontext {
            interface BeanContextServicesListener extends java.beans.beancontext.BeanContextServiceRevokedListener {
                serviceAvailable(arg0: java.beans.beancontext.BeanContextServiceAvailableEvent): void
            }
            interface BeanContextServicesListener$$Lambda extends java.beans.beancontext.BeanContextServiceRevokedListener {
                (arg0: java.beans.beancontext.BeanContextServiceAvailableEvent): void
            }
        }
    }
}