declare namespace java {
    namespace beans {
        namespace beancontext {
            interface BeanContextServicesListener extends java.beans.beancontext.BeanContextServiceRevokedListener {
                serviceAvailable(arg0: java.beans.beancontext.BeanContextServiceAvailableEvent): void
            }
        }
    }
}