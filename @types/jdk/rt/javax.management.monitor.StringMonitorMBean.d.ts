declare namespace javax {
    namespace management {
        namespace monitor {
            interface StringMonitorMBean extends javax.management.monitor.MonitorMBean {
                getDerivedGauge(): string
                getDerivedGaugeTimeStamp(): long
                getDerivedGauge(arg0: javax.management.ObjectName): string
                getDerivedGaugeTimeStamp(arg0: javax.management.ObjectName): long
                getStringToCompare(): string
                setStringToCompare(arg0: java.lang.String | string): void
                getNotifyMatch(): boolean
                setNotifyMatch(arg0: boolean): void
                getNotifyDiffer(): boolean
                setNotifyDiffer(arg0: boolean): void
            }
        }
    }
}