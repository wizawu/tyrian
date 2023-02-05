declare namespace javax {
  namespace management {
    namespace monitor {
      class GaugeMonitor
        extends javax.management.monitor.Monitor
        implements javax.management.monitor.GaugeMonitorMBean
      {
        public constructor()
        public start(): void
        public stop(): void
        public getDerivedGauge(arg0: javax.management.ObjectName): java.lang.Number
        public getDerivedGaugeTimeStamp(arg0: javax.management.ObjectName): number
        public getDerivedGauge(): java.lang.Number
        public getDerivedGaugeTimeStamp(): number
        public getHighThreshold(): java.lang.Number
        public getLowThreshold(): java.lang.Number
        public setThresholds(arg0: java.lang.Number, arg1: java.lang.Number): void
        public getNotifyHigh(): boolean
        public setNotifyHigh(arg0: boolean | java.lang.Boolean): void
        public getNotifyLow(): boolean
        public setNotifyLow(arg0: boolean | java.lang.Boolean): void
        public getDifferenceMode(): boolean
        public setDifferenceMode(arg0: boolean | java.lang.Boolean): void
        public getNotificationInfo(): javax.management.MBeanNotificationInfo[]
        createObservedObject(arg0: javax.management.ObjectName): javax.management.monitor.Monitor$ObservedObject
        isComparableTypeValid(
          arg0: javax.management.ObjectName,
          arg1: java.lang.String | string,
          arg2: java.lang.Comparable<unknown> | java.lang.Comparable$$lambda<unknown>
        ): boolean
        getDerivedGaugeFromComparable(
          arg0: javax.management.ObjectName,
          arg1: java.lang.String | string,
          arg2: java.lang.Comparable<unknown> | java.lang.Comparable$$lambda<unknown>
        ): java.lang.Comparable<unknown>
        onErrorNotification(arg0: javax.management.monitor.MonitorNotification): void
        buildAlarmNotification(
          arg0: javax.management.ObjectName,
          arg1: java.lang.String | string,
          arg2: java.lang.Comparable<unknown> | java.lang.Comparable$$lambda<unknown>
        ): javax.management.monitor.MonitorNotification
        isThresholdTypeValid(
          arg0: javax.management.ObjectName,
          arg1: java.lang.String | string,
          arg2: java.lang.Comparable<unknown> | java.lang.Comparable$$lambda<unknown>
        ): boolean
        public getDerivedGauge(arg0: javax.management.ObjectName): java.lang.Object
      }
    }
  }
}
