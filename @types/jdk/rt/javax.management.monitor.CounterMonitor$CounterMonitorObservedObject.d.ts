declare namespace javax {
    namespace management {
        namespace monitor {
            class CounterMonitor$CounterMonitorObservedObject extends javax.management.monitor.Monitor$ObservedObject {
                public constructor(arg0: javax.management.ObjectName)
                public getThreshold(): java.lang.Number
                public setThreshold(arg0: java.lang.Number): void
                public getPreviousScanCounter(): java.lang.Number
                public setPreviousScanCounter(arg0: java.lang.Number): void
                public getModulusExceeded(): boolean
                public setModulusExceeded(arg0: boolean): void
                public getDerivedGaugeExceeded(): java.lang.Number
                public setDerivedGaugeExceeded(arg0: java.lang.Number): void
                public getDerivedGaugeValid(): boolean
                public setDerivedGaugeValid(arg0: boolean): void
                public getEventAlreadyNotified(): boolean
                public setEventAlreadyNotified(arg0: boolean): void
                public getType(): javax.management.monitor.Monitor$NumericalType
                public setType(arg0: javax.management.monitor.Monitor$NumericalType): void
                public static class: java.lang.Class<any>
            }
        }
    }
}