declare namespace com {
    namespace ibm {
        namespace java {
            namespace lang {
                namespace management {
                    namespace internal {
                        class ManagementUtils {
                            public static readonly VERBOSE_MODE: boolean
                            public static readonly BUFFERPOOL_MXBEAN_DOMAIN_TYPE: string
                            public constructor()
                            public static verifyFieldTypes(arg0: javax.management.openmbean.CompositeData, arg1: java.lang.String[], arg2: java.lang.String[]): void
                            public static verifyFieldNames(arg0: javax.management.openmbean.CompositeData, arg1: java.lang.String[]): void
                            public static verifyFieldNumber(arg0: javax.management.openmbean.CompositeData, arg1: int): void
                            public static convertStringArrayToList(arg0: java.lang.String[]): java.util.List<java.lang.String>
                            public static convertTabularDataToMap(arg0: javax.management.openmbean.TabularData): java.lang.Object
                            public static convertFromOpenType<T>(arg0: java.lang.Object, arg1: java.lang.Class<any>, arg2: java.lang.Class<T>): T
                            public static addCompositeConverter<T>(arg0: java.lang.Class<T>, arg1: java.util.function$.Function<T, javax.management.openmbean.CompositeData>): void
                            public static convertToOpenType<T>(arg0: java.lang.Object, arg1: java.lang.Class<T>, arg2: java.lang.Class<any>): T
                            public static toSystemPropertiesTabularData<T>(arg0: java.util.Map<java.lang.String, java.lang.String>): javax.management.openmbean.TabularData
                            public static getClassMaybePrimitive<T>(arg0: java.lang.String | string): java.lang.Class<any>
                            public static isWrapperClass<T>(arg0: java.lang.Class<any>, arg1: java.lang.Class<any>): boolean
                            public static isANotificationEmitter<T>(arg0: javax.management.MBeanServerConnection, arg1: javax.management.ObjectName): boolean
                            public static isRunningOnUnix<T>(): boolean
                            public static createObjectName<T>(arg0: java.lang.String | string): javax.management.ObjectName
                            public static createObjectName<T>(arg0: java.lang.String | string, arg1: java.lang.String | string): javax.management.ObjectName
                            public static checkNamedMXBean<T>(arg0: java.lang.String | string, arg1: java.lang.Class<any>): javax.management.ObjectName
                            public static checkSupported<T>(arg0: java.lang.Class<any>): void
                            public static checkSupportedSingleton<T>(arg0: java.lang.Class<any>): void
                            public static getAllAvailableMXBeans<T>(): java.util.Set<java.lang.management.PlatformManagedObject>
                            public static getPlatformManagementInterfaces<T>(): java.util.Set<java.lang.Class<java.lang.management.PlatformManagedObject>>
                            public static getPlatformMXBean<T extends java.lang.management.PlatformManagedObject>(arg0: java.lang.Class<T>): T
                            public static getPlatformMXBeans<T extends java.lang.management.PlatformManagedObject>(arg0: java.lang.Class<T>): java.util.List<T>
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}