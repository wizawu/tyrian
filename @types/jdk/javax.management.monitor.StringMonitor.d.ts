declare namespace javax {
  namespace management {
    namespace monitor {

      class StringMonitor extends javax.management.monitor.Monitor implements javax.management.monitor.StringMonitorMBean {
        public constructor()
        public start(): void
        public stop(): void
        public getDerivedGauge(arg0: javax.management.ObjectName): java.lang.String
        public getDerivedGaugeTimeStamp(arg0: javax.management.ObjectName): long
        public getDerivedGauge(): java.lang.String
        public getDerivedGaugeTimeStamp(): long
        public getStringToCompare(): java.lang.String
        public setStringToCompare(arg0: java.lang.String): void
        public getNotifyMatch(): boolean
        public setNotifyMatch(arg0: boolean): void
        public getNotifyDiffer(): boolean
        public setNotifyDiffer(arg0: boolean): void
        public getNotificationInfo(): javax.management.MBeanNotificationInfo[]
        createObservedObject(arg0: javax.management.ObjectName): javax.management.monitor.Monitor$ObservedObject
        isComparableTypeValid(arg0: javax.management.ObjectName, arg1: java.lang.String, arg2: java.lang.Comparable<unknown>): boolean
        onErrorNotification(arg0: javax.management.monitor.MonitorNotification): void
        buildAlarmNotification(arg0: javax.management.ObjectName, arg1: java.lang.String, arg2: java.lang.Comparable<unknown>): javax.management.monitor.MonitorNotification
        public getDerivedGauge(arg0: javax.management.ObjectName): java.lang.Object
      }

    }
  }
}
