declare namespace javax {
    namespace management {
        namespace monitor {
            class GaugeMonitor$GaugeMonitorObservedObject extends javax.management.monitor.Monitor$ObservedObject {
                public constructor(arg0: javax.management.ObjectName)
                public getDerivedGaugeValid(): boolean
                public setDerivedGaugeValid(arg0: boolean): void
                public getType(): javax.management.monitor.Monitor$NumericalType
                public setType(arg0: javax.management.monitor.Monitor$NumericalType): void
                public getPreviousScanGauge(): java.lang.Number
                public setPreviousScanGauge(arg0: java.lang.Number): void
                public getStatus(): int
                public setStatus(arg0: int): void
                public static class: java.lang.Class<any>
            }
        }
    }
}