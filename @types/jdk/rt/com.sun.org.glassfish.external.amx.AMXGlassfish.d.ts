declare namespace com {
    namespace sun {
        namespace org {
            namespace glassfish {
                namespace external {
                    namespace amx {
class AMXGlassfish {
    public static DEFAULT_JMX_DOMAIN: string
    public static DEFAULT: com.sun.org.glassfish.external.amx.AMXGlassfish
    public constructor(arg0: java.lang.String | string)
    public static getGlassfishVersion(): string
    public amxJMXDomain(): string
    public amxSupportDomain(): string
    public dasName(): string
    public dasConfig(): string
    public domainRoot(): javax.management.ObjectName
    public monitoringRoot(): javax.management.ObjectName
    public serverMon(arg0: java.lang.String | string): javax.management.ObjectName
    public serverMonForDAS(): javax.management.ObjectName
    public newObjectName(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): javax.management.ObjectName
    public newObjectName(arg0: java.lang.String | string): javax.management.ObjectName
    public getBootAMXMBeanObjectName(): javax.management.ObjectName
    public invokeBootAMX(arg0: javax.management.MBeanServerConnection): void
    public listenForDomainRoot<T extends com.sun.org.glassfish.external.amx.MBeanListener$Callback>(arg0: javax.management.MBeanServerConnection, arg1: T): com.sun.org.glassfish.external.amx.MBeanListener<T>
    public waitAMXReady<T extends com.sun.org.glassfish.external.amx.MBeanListener$Callback>(arg0: javax.management.MBeanServerConnection): javax.management.ObjectName
    public listenForBootAMX<T extends com.sun.org.glassfish.external.amx.MBeanListener$Callback>(arg0: javax.management.MBeanServerConnection, arg1: T): com.sun.org.glassfish.external.amx.MBeanListener<T>
    public bootAMX<T extends com.sun.org.glassfish.external.amx.MBeanListener$Callback>(arg0: javax.management.MBeanServerConnection): javax.management.ObjectName
    public bootAMX<T extends com.sun.org.glassfish.external.amx.MBeanListener$Callback>(arg0: javax.management.MBeanServer): javax.management.ObjectName
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}