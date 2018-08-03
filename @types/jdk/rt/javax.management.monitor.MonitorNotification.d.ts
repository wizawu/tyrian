declare namespace javax {
    namespace management {
        namespace monitor {
            class MonitorNotification extends javax.management.Notification {
                public static readonly OBSERVED_OBJECT_ERROR: string
                public static readonly OBSERVED_ATTRIBUTE_ERROR: string
                public static readonly OBSERVED_ATTRIBUTE_TYPE_ERROR: string
                public static readonly THRESHOLD_ERROR: string
                public static readonly RUNTIME_ERROR: string
                public static readonly THRESHOLD_VALUE_EXCEEDED: string
                public static readonly THRESHOLD_HIGH_VALUE_EXCEEDED: string
                public static readonly THRESHOLD_LOW_VALUE_EXCEEDED: string
                public static readonly STRING_TO_COMPARE_VALUE_MATCHED: string
                public static readonly STRING_TO_COMPARE_VALUE_DIFFERED: string
                public getObservedObject(): javax.management.ObjectName
                public getObservedAttribute(): string
                public getDerivedGauge(): java.lang.Object
                public getTrigger(): java.lang.Object
                public static class: java.lang.Class<any>
            }
        }
    }
}