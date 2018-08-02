declare namespace java {
    namespace beans {
        namespace beancontext {
class BeanContextServiceRevokedEvent extends java.beans.beancontext.BeanContextEvent {
    protected serviceClass: java.lang.Class
    public constructor(arg0: java.beans.beancontext.BeanContextServices, arg1: java.lang.Class, arg2: boolean)
    public getSourceAsBeanContextServices(): java.beans.beancontext.BeanContextServices
    public getServiceClass(): java.lang.Class
    public isServiceClass(arg0: java.lang.Class): boolean
    public isCurrentServiceInvalidNow(): boolean
    public static class: java.lang.Class<any>
}

        }
    }
}