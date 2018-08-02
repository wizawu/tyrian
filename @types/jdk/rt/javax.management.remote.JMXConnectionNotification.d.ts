declare namespace javax {
    namespace management {
        namespace remote {
class JMXConnectionNotification extends javax.management.Notification {
    public static OPENED: string
    public static CLOSED: string
    public static FAILED: string
    public static NOTIFS_LOST: string
    public constructor(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: java.lang.String | string, arg3: long, arg4: java.lang.String | string, arg5: java.lang.Object)
    public getConnectionId(): string
    public static class: java.lang.Class<any>
}

        }
    }
}