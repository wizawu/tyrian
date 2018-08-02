declare namespace javax {
    namespace management {
        namespace monitor {
            abstract class Monitor extends javax.management.NotificationBroadcasterSupport implements javax.management.monitor.MonitorMBean , javax.management.MBeanRegistration {
                protected static capacityIncrement: int
                protected elementCount: int
                protected alreadyNotified: int
                protected alreadyNotifieds: int[]
                protected server: javax.management.MBeanServer
                protected static RESET_FLAGS_ALREADY_NOTIFIED: int
                protected static OBSERVED_OBJECT_ERROR_NOTIFIED: int
                protected static OBSERVED_ATTRIBUTE_ERROR_NOTIFIED: int
                protected static OBSERVED_ATTRIBUTE_TYPE_ERROR_NOTIFIED: int
                protected static RUNTIME_ERROR_NOTIFIED: int
                protected dbgTag: string
                public constructor()
                public preRegister(arg0: javax.management.MBeanServer, arg1: javax.management.ObjectName): javax.management.ObjectName
                public postRegister(arg0: java.lang.Boolean | boolean): void
                public preDeregister(): void
                public postDeregister(): void
                public start(): void
                public stop(): void
                public getObservedObject(): javax.management.ObjectName
                public setObservedObject(arg0: javax.management.ObjectName): void
                public addObservedObject(arg0: javax.management.ObjectName): void
                public removeObservedObject(arg0: javax.management.ObjectName): void
                public containsObservedObject(arg0: javax.management.ObjectName): boolean
                public getObservedObjects(): javax.management.ObjectName[]
                public getObservedAttribute(): string
                public setObservedAttribute(arg0: java.lang.String | string): void
                public getGranularityPeriod(): long
                public setGranularityPeriod(arg0: long): void
                public isActive(): boolean
                public static class: java.lang.Class<any>
            }
        }
    }
}