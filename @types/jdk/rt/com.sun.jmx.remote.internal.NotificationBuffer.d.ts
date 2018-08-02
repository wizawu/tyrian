declare namespace com {
    namespace sun {
        namespace jmx {
            namespace remote {
                namespace internal {
                    interface NotificationBuffer {
                        fetchNotifications(arg0: com.sun.jmx.remote.internal.NotificationBufferFilter | com.sun.jmx.remote.internal.NotificationBufferFilter$$Lambda, arg1: long, arg2: long, arg3: int): javax.management.remote.NotificationResult
                        dispose(): void
                    }
                }
            }
        }
    }
}