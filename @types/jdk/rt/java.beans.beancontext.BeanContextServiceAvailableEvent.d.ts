declare namespace java {
    namespace beans {
        namespace beancontext {
class BeanContextServiceAvailableEvent extends java.beans.beancontext.BeanContextEvent {
    protected serviceClass: java.lang.Class
    public constructor(arg0: java.beans.beancontext.BeanContextServices, arg1: java.lang.Class)
    public getSourceAsBeanContextServices(): java.beans.beancontext.BeanContextServices
    public getServiceClass(): java.lang.Class
    public getCurrentServiceSelectors(): java.util.Iterator
    public static class: java.lang.Class<any>
}

        }
    }
}