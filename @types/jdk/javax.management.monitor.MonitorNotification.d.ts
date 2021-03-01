declare namespace javax {
  namespace management {
    namespace monitor {

      class MonitorNotification extends javax.management.Notification {

        public static readonly OBSERVED_OBJECT_ERROR: java.lang.String
        public static readonly OBSERVED_ATTRIBUTE_ERROR: java.lang.String
        public static readonly OBSERVED_ATTRIBUTE_TYPE_ERROR: java.lang.String
        public static readonly THRESHOLD_ERROR: java.lang.String
        public static readonly RUNTIME_ERROR: java.lang.String
        public static readonly THRESHOLD_VALUE_EXCEEDED: java.lang.String
        public static readonly THRESHOLD_HIGH_VALUE_EXCEEDED: java.lang.String
        public static readonly THRESHOLD_LOW_VALUE_EXCEEDED: java.lang.String
        public static readonly STRING_TO_COMPARE_VALUE_MATCHED: java.lang.String
        public static readonly STRING_TO_COMPARE_VALUE_DIFFERED: java.lang.String
        constructor(arg0: java.lang.String, arg1: java.lang.Object, arg2: long, arg3: long, arg4: java.lang.String, arg5: javax.management.ObjectName, arg6: java.lang.String, arg7: java.lang.Object, arg8: java.lang.Object)
        public getObservedObject(): javax.management.ObjectName
        public getObservedAttribute(): java.lang.String
        public getDerivedGauge(): java.lang.Object
        public getTrigger(): java.lang.Object
      }

    }
  }
}
