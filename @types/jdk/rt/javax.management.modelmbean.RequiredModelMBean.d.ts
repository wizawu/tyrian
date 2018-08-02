declare namespace javax {
    namespace management {
        namespace modelmbean {
class RequiredModelMBean implements javax.management.modelmbean.ModelMBean , javax.management.MBeanRegistration , javax.management.NotificationEmitter {
    public constructor()
    public constructor(arg0: javax.management.modelmbean.ModelMBeanInfo)
    public setModelMBeanInfo(arg0: javax.management.modelmbean.ModelMBeanInfo): void
    public setManagedResource(arg0: java.lang.Object, arg1: java.lang.String | string): void
    public load(): void
    public store(): void
    public getMBeanInfo(): javax.management.MBeanInfo
    public invoke(arg0: java.lang.String | string, arg1: java.lang.Object[], arg2: java.lang.String[]): java.lang.Object
    public getAttribute(arg0: java.lang.String | string): java.lang.Object
    public getAttributes(arg0: java.lang.String[]): javax.management.AttributeList
    public setAttribute(arg0: javax.management.Attribute): void
    public setAttributes(arg0: javax.management.AttributeList): javax.management.AttributeList
    public addNotificationListener(arg0: javax.management.NotificationListener, arg1: javax.management.NotificationFilter, arg2: java.lang.Object): void
    public removeNotificationListener(arg0: javax.management.NotificationListener): void
    public removeNotificationListener(arg0: javax.management.NotificationListener, arg1: javax.management.NotificationFilter, arg2: java.lang.Object): void
    public sendNotification(arg0: javax.management.Notification): void
    public sendNotification(arg0: java.lang.String | string): void
    public getNotificationInfo(): javax.management.MBeanNotificationInfo[]
    public addAttributeChangeNotificationListener(arg0: javax.management.NotificationListener, arg1: java.lang.String | string, arg2: java.lang.Object): void
    public removeAttributeChangeNotificationListener(arg0: javax.management.NotificationListener, arg1: java.lang.String | string): void
    public sendAttributeChangeNotification(arg0: javax.management.AttributeChangeNotification): void
    public sendAttributeChangeNotification(arg0: javax.management.Attribute, arg1: javax.management.Attribute): void
    protected getClassLoaderRepository(): javax.management.loading.ClassLoaderRepository
    public preRegister(arg0: javax.management.MBeanServer, arg1: javax.management.ObjectName): javax.management.ObjectName
    public postRegister(arg0: java.lang.Boolean | boolean): void
    public preDeregister(): void
    public postDeregister(): void
    public static class: java.lang.Class<any>
}

        }
    }
}