declare namespace javax {
    namespace management {
        namespace openmbean {
            class OpenMBeanParameterInfoSupport extends javax.management.MBeanParameterInfo implements javax.management.openmbean.OpenMBeanParameterInfo {
                public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: javax.management.openmbean.OpenType<any>)
                public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: javax.management.openmbean.OpenType<any>, arg3: javax.management.Descriptor)
                public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: javax.management.openmbean.OpenType<T>, arg3: T)
                public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: javax.management.openmbean.OpenType<T>, arg3: T, arg4: T[])
                public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: javax.management.openmbean.OpenType<T>, arg3: T, arg4: java.lang.Comparable<T> | java.lang.Comparable$$Lambda<T>, arg5: java.lang.Comparable<T> | java.lang.Comparable$$Lambda<T>)
                public getOpenType<T>(): javax.management.openmbean.OpenType<any>
                public getDefaultValue<T>(): java.lang.Object
                public getLegalValues<T>(): java.util.Set<any>
                public getMinValue<T>(): java.lang.Comparable<any>
                public getMaxValue<T>(): java.lang.Comparable<any>
                public hasDefaultValue<T>(): boolean
                public hasLegalValues<T>(): boolean
                public hasMinValue<T>(): boolean
                public hasMaxValue<T>(): boolean
                public isValue<T>(arg0: java.lang.Object): boolean
                public equals<T>(arg0: java.lang.Object): boolean
                public hashCode<T>(): int
                public toString<T>(): string
                public static class: java.lang.Class<any>
            }
        }
    }
}