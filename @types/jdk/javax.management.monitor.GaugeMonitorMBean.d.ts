declare namespace javax {
  namespace management {
    namespace monitor {

      interface GaugeMonitorMBean extends javax.management.monitor.MonitorMBean {
        getDerivedGauge(): java.lang.Number
        getDerivedGaugeTimeStamp(): number
        getDerivedGauge(arg0: javax.management.ObjectName): java.lang.Number
        getDerivedGaugeTimeStamp(arg0: javax.management.ObjectName): number
        getHighThreshold(): java.lang.Number
        getLowThreshold(): java.lang.Number
        setThresholds(arg0: java.lang.Number, arg1: java.lang.Number): void
        getNotifyHigh(): boolean
        setNotifyHigh(arg0: boolean | java.lang.Boolean): void
        getNotifyLow(): boolean
        setNotifyLow(arg0: boolean | java.lang.Boolean): void
        getDifferenceMode(): boolean
        setDifferenceMode(arg0: boolean | java.lang.Boolean): void
      }

    }
  }
}
