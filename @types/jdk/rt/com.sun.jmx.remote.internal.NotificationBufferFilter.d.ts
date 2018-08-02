declare namespace com {
    namespace sun {
        namespace jmx {
            namespace remote {
                namespace internal {
                    interface NotificationBufferFilter {
                        apply(arg0: java.util.List<javax.management.remote.TargetedNotification>, arg1: javax.management.ObjectName, arg2: javax.management.Notification): void
                    }
                    interface NotificationBufferFilter$$Lambda {
                        (arg0: java.util.List<javax.management.remote.TargetedNotification>, arg1: javax.management.ObjectName, arg2: javax.management.Notification): void
                    }
                }
            }
        }
    }
}