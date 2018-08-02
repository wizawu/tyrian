declare namespace java {
    namespace beans {
        namespace beancontext {
            class BeanContextServicesSupport$BCSSProxyServiceProvider implements java.beans.beancontext.BeanContextServiceProvider , java.beans.beancontext.BeanContextServiceRevokedListener {
                public getService(arg0: java.beans.beancontext.BeanContextServices, arg1: java.lang.Object, arg2: java.lang.Class, arg3: java.lang.Object): java.lang.Object
                public releaseService(arg0: java.beans.beancontext.BeanContextServices, arg1: java.lang.Object, arg2: java.lang.Object): void
                public getCurrentServiceSelectors(arg0: java.beans.beancontext.BeanContextServices, arg1: java.lang.Class): java.util.Iterator
                public serviceRevoked(arg0: java.beans.beancontext.BeanContextServiceRevokedEvent): void
                public static class: java.lang.Class<any>
            }
        }
    }
}