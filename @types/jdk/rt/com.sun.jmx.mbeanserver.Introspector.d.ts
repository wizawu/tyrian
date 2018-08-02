declare namespace com {
    namespace sun {
        namespace jmx {
            namespace mbeanserver {
                class Introspector {
                    public static ALLOW_NONPUBLIC_MBEAN: boolean
                    public static isDynamic(arg0: java.lang.Class<any>): boolean
                    public static testCreation(arg0: java.lang.Class<any>): void
                    public static checkCompliance(arg0: java.lang.Class<any>): void
                    public static makeDynamicMBean<T>(arg0: T): javax.management.DynamicMBean
                    public static testCompliance(arg0: java.lang.Class<any>): javax.management.MBeanInfo
                    public static testComplianceMXBeanInterface(arg0: java.lang.Class<any>): void
                    public static testComplianceMBeanInterface(arg0: java.lang.Class<any>): void
                    public static testCompliance(arg0: java.lang.Class<any>, arg1: java.lang.Class<any>): javax.management.MBeanInfo
                    public static getMBeanInterface(arg0: java.lang.Class<any>): java.lang.Class<any>
                    public static getStandardMBeanInterface<T>(arg0: java.lang.Class<T>): java.lang.Class<T>
                    public static getMXBeanInterface<T>(arg0: java.lang.Class<T>): java.lang.Class<T>
                    public static descriptorForElement(arg0: java.lang.reflect.AnnotatedElement): javax.management.Descriptor
                    public static descriptorForAnnotations(arg0: java.lang.annotation.Annotation[]): javax.management.Descriptor
                    public static elementFromComplex(arg0: java.lang.Object, arg1: java.lang.String | string): java.lang.Object
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}