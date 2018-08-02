declare namespace com {
    namespace sun {
        namespace jmx {
            namespace mbeanserver {
class Repository {
    public constructor(arg0: java.lang.String | string)
    public constructor(arg0: java.lang.String | string, arg1: boolean)
    public getDomains(): java.lang.String[]
    public addMBean(arg0: javax.management.DynamicMBean, arg1: javax.management.ObjectName, arg2: com.sun.jmx.mbeanserver.Repository$RegistrationContext): void
    public contains(arg0: javax.management.ObjectName): boolean
    public retrieve(arg0: javax.management.ObjectName): javax.management.DynamicMBean
    public query(arg0: javax.management.ObjectName, arg1: javax.management.QueryExp): java.util.Set<com.sun.jmx.mbeanserver.NamedObject>
    public remove(arg0: javax.management.ObjectName, arg1: com.sun.jmx.mbeanserver.Repository$RegistrationContext): void
    public getCount(): java.lang.Integer
    public getDefaultDomain(): string
    public static class: java.lang.Class<any>
}

            }
        }
    }
}