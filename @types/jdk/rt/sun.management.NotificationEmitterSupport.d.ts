declare namespace sun {
    namespace management {
abstract class NotificationEmitterSupport implements javax.management.NotificationEmitter {
    protected constructor()
    public addNotificationListener(arg0: javax.management.NotificationListener, arg1: javax.management.NotificationFilter, arg2: java.lang.Object): void
    public removeNotificationListener(arg0: javax.management.NotificationListener): void
    public removeNotificationListener(arg0: javax.management.NotificationListener, arg1: javax.management.NotificationFilter, arg2: java.lang.Object): void
    public getNotificationInfo(): javax.management.MBeanNotificationInfo[]
    public static class: java.lang.Class<any>
}

    }
}