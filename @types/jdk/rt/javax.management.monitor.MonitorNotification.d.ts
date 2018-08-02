declare namespace javax {
    namespace management {
        namespace monitor {
class MonitorNotification extends javax.management.Notification {
    public static OBSERVED_OBJECT_ERROR: string
    public static OBSERVED_ATTRIBUTE_ERROR: string
    public static OBSERVED_ATTRIBUTE_TYPE_ERROR: string
    public static THRESHOLD_ERROR: string
    public static RUNTIME_ERROR: string
    public static THRESHOLD_VALUE_EXCEEDED: string
    public static THRESHOLD_HIGH_VALUE_EXCEEDED: string
    public static THRESHOLD_LOW_VALUE_EXCEEDED: string
    public static STRING_TO_COMPARE_VALUE_MATCHED: string
    public static STRING_TO_COMPARE_VALUE_DIFFERED: string
    public getObservedObject(): javax.management.ObjectName
    public getObservedAttribute(): string
    public getDerivedGauge(): java.lang.Object
    public getTrigger(): java.lang.Object
    public static class: java.lang.Class<any>
}

        }
    }
}