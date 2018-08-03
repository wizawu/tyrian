declare namespace javax {
    namespace management {
        class StandardMBean implements javax.management.DynamicMBean , javax.management.MBeanRegistration {
            public constructor(arg0: T, arg1: java.lang.Class<T>)
            protected constructor(arg0: java.lang.Class<any>)
            public constructor(arg0: T, arg1: java.lang.Class<T>, arg2: boolean)
            protected constructor(arg0: java.lang.Class<any>, arg1: boolean)
            public setImplementation<T>(arg0: java.lang.Object): void
            public getImplementation<T>(): java.lang.Object
            public getMBeanInterface<T>(): java.lang.Class<any>
            public getImplementationClass<T>(): java.lang.Class<any>
            public getAttribute<T>(arg0: java.lang.String | string): java.lang.Object
            public setAttribute<T>(arg0: javax.management.Attribute): void
            public getAttributes<T>(arg0: java.lang.String[]): javax.management.AttributeList
            public setAttributes<T>(arg0: javax.management.AttributeList): javax.management.AttributeList
            public invoke<T>(arg0: java.lang.String | string, arg1: java.lang.Object[], arg2: java.lang.String[]): java.lang.Object
            public getMBeanInfo<T>(): javax.management.MBeanInfo
            protected getClassName<T>(arg0: javax.management.MBeanInfo): string
            protected getDescription<T>(arg0: javax.management.MBeanInfo): string
            protected getDescription<T>(arg0: javax.management.MBeanFeatureInfo): string
            protected getDescription<T>(arg0: javax.management.MBeanAttributeInfo): string
            protected getDescription<T>(arg0: javax.management.MBeanConstructorInfo): string
            protected getDescription<T>(arg0: javax.management.MBeanConstructorInfo, arg1: javax.management.MBeanParameterInfo, arg2: int): string
            protected getParameterName<T>(arg0: javax.management.MBeanConstructorInfo, arg1: javax.management.MBeanParameterInfo, arg2: int): string
            protected getDescription<T>(arg0: javax.management.MBeanOperationInfo): string
            protected getImpact<T>(arg0: javax.management.MBeanOperationInfo): int
            protected getParameterName<T>(arg0: javax.management.MBeanOperationInfo, arg1: javax.management.MBeanParameterInfo, arg2: int): string
            protected getDescription<T>(arg0: javax.management.MBeanOperationInfo, arg1: javax.management.MBeanParameterInfo, arg2: int): string
            protected getConstructors<T>(arg0: javax.management.MBeanConstructorInfo[], arg1: java.lang.Object): javax.management.MBeanConstructorInfo[]
            protected getCachedMBeanInfo<T>(): javax.management.MBeanInfo
            protected cacheMBeanInfo<T>(arg0: javax.management.MBeanInfo): void
            public preRegister<T>(arg0: javax.management.MBeanServer, arg1: javax.management.ObjectName): javax.management.ObjectName
            public postRegister<T>(arg0: java.lang.Boolean | boolean): void
            public preDeregister<T>(): void
            public postDeregister<T>(): void
            public static class: java.lang.Class<any>
        }
    }
}