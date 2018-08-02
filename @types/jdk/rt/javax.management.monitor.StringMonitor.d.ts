declare namespace javax {
    namespace management {
        namespace monitor {
class StringMonitor extends javax.management.monitor.Monitor implements javax.management.monitor.StringMonitorMBean {
    public constructor()
    public start(): void
    public stop(): void
    public getDerivedGauge(arg0: javax.management.ObjectName): string
    public getDerivedGaugeTimeStamp(arg0: javax.management.ObjectName): long
    public getDerivedGauge(): string
    public getDerivedGaugeTimeStamp(): long
    public getStringToCompare(): string
    public setStringToCompare(arg0: java.lang.String | string): void
    public getNotifyMatch(): boolean
    public setNotifyMatch(arg0: boolean): void
    public getNotifyDiffer(): boolean
    public setNotifyDiffer(arg0: boolean): void
    public getNotificationInfo(): javax.management.MBeanNotificationInfo[]
    public getDerivedGauge(arg0: javax.management.ObjectName): java.lang.Object
    public static class: java.lang.Class<any>
}

        }
    }
}