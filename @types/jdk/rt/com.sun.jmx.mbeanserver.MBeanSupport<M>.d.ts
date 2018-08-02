declare namespace com {
    namespace sun {
        namespace jmx {
            namespace mbeanserver {
abstract class MBeanSupport<M> implements com.sun.jmx.mbeanserver.DynamicMBean2 , javax.management.MBeanRegistration {
    public isMXBean(): boolean
    public register(arg0: javax.management.MBeanServer, arg1: javax.management.ObjectName): void
    public unregister(): void
    public preRegister(arg0: javax.management.MBeanServer, arg1: javax.management.ObjectName): javax.management.ObjectName
    public preRegister2(arg0: javax.management.MBeanServer, arg1: javax.management.ObjectName): void
    public registerFailed(): void
    public postRegister(arg0: java.lang.Boolean | boolean): void
    public preDeregister(): void
    public postDeregister(): void
    public getAttribute(arg0: java.lang.String | string): java.lang.Object
    public getAttributes(arg0: java.lang.String[]): javax.management.AttributeList
    public setAttribute(arg0: javax.management.Attribute): void
    public setAttributes(arg0: javax.management.AttributeList): javax.management.AttributeList
    public invoke(arg0: java.lang.String | string, arg1: java.lang.Object[], arg2: java.lang.String[]): java.lang.Object
    public getMBeanInfo(): javax.management.MBeanInfo
    public getClassName(): string
    public getResource(): java.lang.Object
    public getMBeanInterface(): java.lang.Class<any>
    public static class: java.lang.Class<any>
}

            }
        }
    }
}