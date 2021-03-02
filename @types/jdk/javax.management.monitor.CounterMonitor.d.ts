declare namespace javax {
  namespace management {
    namespace monitor {

      class CounterMonitor extends javax.management.monitor.Monitor implements javax.management.monitor.CounterMonitorMBean {
        public constructor()
        public start(): void
        public stop(): void
        public getDerivedGauge(arg0: javax.management.ObjectName): java.lang.Number
        public getDerivedGaugeTimeStamp(arg0: javax.management.ObjectName): long
        public getThreshold(arg0: javax.management.ObjectName): java.lang.Number
        public getInitThreshold(): java.lang.Number
        public setInitThreshold(arg0: java.lang.Number): void
        public getDerivedGauge(): java.lang.Number
        public getDerivedGaugeTimeStamp(): long
        public getThreshold(): java.lang.Number
        public setThreshold(arg0: java.lang.Number): void
        public getOffset(): java.lang.Number
        public setOffset(arg0: java.lang.Number): void
        public getModulus(): java.lang.Number
        public setModulus(arg0: java.lang.Number): void
        public getNotify(): boolean
        public setNotify(arg0: boolean): void
        public getDifferenceMode(): boolean
        public setDifferenceMode(arg0: boolean): void
        public getNotificationInfo(): javax.management.MBeanNotificationInfo[]
        createObservedObject(arg0: javax.management.ObjectName): javax.management.monitor.Monitor$ObservedObject
        isComparableTypeValid(arg0: javax.management.ObjectName, arg1: java.lang.String, arg2: java.lang.Comparable<unknown>): boolean
        getDerivedGaugeFromComparable(arg0: javax.management.ObjectName, arg1: java.lang.String, arg2: java.lang.Comparable<unknown>): java.lang.Comparable<unknown>
        onErrorNotification(arg0: javax.management.monitor.MonitorNotification): void
        buildAlarmNotification(arg0: javax.management.ObjectName, arg1: java.lang.String, arg2: java.lang.Comparable<unknown>): javax.management.monitor.MonitorNotification
        isThresholdTypeValid(arg0: javax.management.ObjectName, arg1: java.lang.String, arg2: java.lang.Comparable<unknown>): boolean
        public getDerivedGauge(arg0: javax.management.ObjectName): java.lang.Object
      }

    }
  }
}
