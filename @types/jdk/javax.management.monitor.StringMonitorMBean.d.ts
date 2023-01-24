declare namespace javax {
  namespace management {
    namespace monitor {
      interface StringMonitorMBean extends javax.management.monitor.MonitorMBean {
        getDerivedGauge(): java.lang.String
        getDerivedGaugeTimeStamp(): number
        getDerivedGauge(arg0: javax.management.ObjectName): java.lang.String
        getDerivedGaugeTimeStamp(arg0: javax.management.ObjectName): number
        getStringToCompare(): java.lang.String
        setStringToCompare(arg0: java.lang.String | string): void
        getNotifyMatch(): boolean
        setNotifyMatch(arg0: boolean | java.lang.Boolean): void
        getNotifyDiffer(): boolean
        setNotifyDiffer(arg0: boolean | java.lang.Boolean): void
      }
    }
  }
}
