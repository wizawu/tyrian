declare namespace javax {
    namespace management {
        class MBeanConstructorInfo extends javax.management.MBeanFeatureInfo implements java.lang.Cloneable {
            public constructor(arg0: java.lang.String | string, arg1: java.lang.reflect.Constructor<any>)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: javax.management.MBeanParameterInfo[])
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: javax.management.MBeanParameterInfo[], arg3: javax.management.Descriptor)
            public clone(): java.lang.Object
            public getSignature(): javax.management.MBeanParameterInfo[]
            public toString(): string
            public equals(arg0: java.lang.Object): boolean
            public hashCode(): int
            public static class: java.lang.Class<any>
        }
    }
}