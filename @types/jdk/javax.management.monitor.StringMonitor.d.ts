declare namespace javax {
  namespace management {
    namespace monitor {
      class StringMonitor
        extends javax.management.monitor.Monitor
        implements javax.management.monitor.StringMonitorMBean
      {
        public constructor()
        public start(): void
        public stop(): void
        public getDerivedGauge(arg0: javax.management.ObjectName): java.lang.String
        public getDerivedGaugeTimeStamp(arg0: javax.management.ObjectName): number
        public getDerivedGauge(): java.lang.String
        public getDerivedGaugeTimeStamp(): number
        public getStringToCompare(): java.lang.String
        public setStringToCompare(arg0: java.lang.String | string): void
        public getNotifyMatch(): boolean
        public setNotifyMatch(arg0: boolean | java.lang.Boolean): void
        public getNotifyDiffer(): boolean
        public setNotifyDiffer(arg0: boolean | java.lang.Boolean): void
        public getNotificationInfo(): javax.management.MBeanNotificationInfo[]
        createObservedObject(arg0: javax.management.ObjectName): javax.management.monitor.Monitor$ObservedObject
        isComparableTypeValid(
          arg0: javax.management.ObjectName,
          arg1: java.lang.String | string,
          arg2: java.lang.Comparable<unknown> | java.lang.Comparable$$lambda<unknown>
        ): boolean
        onErrorNotification(arg0: javax.management.monitor.MonitorNotification): void
        buildAlarmNotification(
          arg0: javax.management.ObjectName,
          arg1: java.lang.String | string,
          arg2: java.lang.Comparable<unknown> | java.lang.Comparable$$lambda<unknown>
        ): javax.management.monitor.MonitorNotification
        public getDerivedGauge(arg0: javax.management.ObjectName): java.lang.Object
      }
    }
  }
}
