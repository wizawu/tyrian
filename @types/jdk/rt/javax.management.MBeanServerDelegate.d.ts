declare namespace javax {
    namespace management {
class MBeanServerDelegate implements javax.management.MBeanServerDelegateMBean , javax.management.NotificationEmitter {
    public static DELEGATE_NAME: javax.management.ObjectName
    public constructor()
    public getMBeanServerId(): string
    public getSpecificationName(): string
    public getSpecificationVersion(): string
    public getSpecificationVendor(): string
    public getImplementationName(): string
    public getImplementationVersion(): string
    public getImplementationVendor(): string
    public getNotificationInfo(): javax.management.MBeanNotificationInfo[]
    public addNotificationListener(arg0: javax.management.NotificationListener, arg1: javax.management.NotificationFilter, arg2: java.lang.Object): void
    public removeNotificationListener(arg0: javax.management.NotificationListener, arg1: javax.management.NotificationFilter, arg2: java.lang.Object): void
    public removeNotificationListener(arg0: javax.management.NotificationListener): void
    public sendNotification(arg0: javax.management.Notification): void
    public static class: java.lang.Class<any>
}

    }
}