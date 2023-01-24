declare namespace javax {
  namespace management {
    namespace monitor {
      interface CounterMonitorMBean extends javax.management.monitor.MonitorMBean {
        getDerivedGauge(): java.lang.Number
        getDerivedGaugeTimeStamp(): number
        getThreshold(): java.lang.Number
        setThreshold(arg0: java.lang.Number): void
        getDerivedGauge(arg0: javax.management.ObjectName): java.lang.Number
        getDerivedGaugeTimeStamp(arg0: javax.management.ObjectName): number
        getThreshold(arg0: javax.management.ObjectName): java.lang.Number
        getInitThreshold(): java.lang.Number
        setInitThreshold(arg0: java.lang.Number): void
        getOffset(): java.lang.Number
        setOffset(arg0: java.lang.Number): void
        getModulus(): java.lang.Number
        setModulus(arg0: java.lang.Number): void
        getNotify(): boolean
        setNotify(arg0: boolean | java.lang.Boolean): void
        getDifferenceMode(): boolean
        setDifferenceMode(arg0: boolean | java.lang.Boolean): void
      }
    }
  }
}
