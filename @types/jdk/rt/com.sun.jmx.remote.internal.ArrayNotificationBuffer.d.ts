declare namespace com {
    namespace sun {
        namespace jmx {
            namespace remote {
                namespace internal {
class ArrayNotificationBuffer implements com.sun.jmx.remote.internal.NotificationBuffer {
    public static getNotificationBuffer(arg0: javax.management.MBeanServer, arg1: java.util.Map<java.lang.String, any>): com.sun.jmx.remote.internal.NotificationBuffer
    public dispose(): void
    public fetchNotifications(arg0: com.sun.jmx.remote.internal.NotificationBufferFilter | com.sun.jmx.remote.internal.NotificationBufferFilter$$Lambda, arg1: long, arg2: long, arg3: int): javax.management.remote.NotificationResult
    public static class: java.lang.Class<any>
}

                }
            }
        }
    }
}