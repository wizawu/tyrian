declare namespace javax {
    namespace naming {
        namespace event {
class NamingEvent extends java.util.EventObject {
    public static OBJECT_ADDED: int
    public static OBJECT_REMOVED: int
    public static OBJECT_RENAMED: int
    public static OBJECT_CHANGED: int
    protected changeInfo: java.lang.Object
    protected type: int
    protected oldBinding: javax.naming.Binding
    protected newBinding: javax.naming.Binding
    public constructor(arg0: javax.naming.event.EventContext, arg1: int, arg2: javax.naming.Binding, arg3: javax.naming.Binding, arg4: java.lang.Object)
    public getType(): int
    public getEventContext(): javax.naming.event.EventContext
    public getOldBinding(): javax.naming.Binding
    public getNewBinding(): javax.naming.Binding
    public getChangeInfo(): java.lang.Object
    public dispatch(arg0: javax.naming.event.NamingListener): void
    public static class: java.lang.Class<any>
}

        }
    }
}