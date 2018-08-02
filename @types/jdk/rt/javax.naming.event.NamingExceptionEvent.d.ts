declare namespace javax {
    namespace naming {
        namespace event {
class NamingExceptionEvent extends java.util.EventObject {
    public constructor(arg0: javax.naming.event.EventContext, arg1: javax.naming.NamingException)
    public getException(): javax.naming.NamingException
    public getEventContext(): javax.naming.event.EventContext
    public dispatch(arg0: javax.naming.event.NamingListener): void
    public static class: java.lang.Class<any>
}

        }
    }
}