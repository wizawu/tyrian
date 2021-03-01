declare namespace javax {
  namespace management {
    namespace monitor {

      interface StringMonitorMBean extends javax.management.monitor.MonitorMBean {

        getDerivedGauge(): java.lang.String
        getDerivedGaugeTimeStamp(): long
        getDerivedGauge(arg0: javax.management.ObjectName): java.lang.String
        getDerivedGaugeTimeStamp(arg0: javax.management.ObjectName): long
        getStringToCompare(): java.lang.String
        setStringToCompare(arg0: java.lang.String): void
        getNotifyMatch(): boolean
        setNotifyMatch(arg0: boolean): void
        getNotifyDiffer(): boolean
        setNotifyDiffer(arg0: boolean): void
      }

    }
  }
}
