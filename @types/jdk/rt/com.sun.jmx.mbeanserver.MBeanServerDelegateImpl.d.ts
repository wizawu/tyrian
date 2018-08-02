declare namespace com {
    namespace sun {
        namespace jmx {
            namespace mbeanserver {
class MBeanServerDelegateImpl extends javax.management.MBeanServerDelegate implements javax.management.DynamicMBean , javax.management.MBeanRegistration {
    public constructor()
    public preRegister(arg0: javax.management.MBeanServer, arg1: javax.management.ObjectName): javax.management.ObjectName
    public postRegister(arg0: java.lang.Boolean | boolean): void
    public preDeregister(): void
    public postDeregister(): void
    public getAttribute(arg0: java.lang.String | string): java.lang.Object
    public setAttribute(arg0: javax.management.Attribute): void
    public getAttributes(arg0: java.lang.String[]): javax.management.AttributeList
    public setAttributes(arg0: javax.management.AttributeList): javax.management.AttributeList
    public invoke(arg0: java.lang.String | string, arg1: java.lang.Object[], arg2: java.lang.String[]): java.lang.Object
    public getMBeanInfo(): javax.management.MBeanInfo
    public static class: java.lang.Class<any>
}

            }
        }
    }
}