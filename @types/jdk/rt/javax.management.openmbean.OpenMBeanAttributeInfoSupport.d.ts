declare namespace javax {
    namespace management {
        namespace openmbean {
            class OpenMBeanAttributeInfoSupport extends javax.management.MBeanAttributeInfo implements javax.management.openmbean.OpenMBeanAttributeInfo {
                public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: javax.management.openmbean.OpenType<any>, arg3: boolean, arg4: boolean, arg5: boolean)
                public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: javax.management.openmbean.OpenType<any>, arg3: boolean, arg4: boolean, arg5: boolean, arg6: javax.management.Descriptor)
                public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: javax.management.openmbean.OpenType<T>, arg3: boolean, arg4: boolean, arg5: boolean, arg6: T)
                public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: javax.management.openmbean.OpenType<T>, arg3: boolean, arg4: boolean, arg5: boolean, arg6: T, arg7: T[])
                public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: javax.management.openmbean.OpenType<T>, arg3: boolean, arg4: boolean, arg5: boolean, arg6: T, arg7: java.lang.Comparable<T> | java.lang.Comparable$$Lambda<T>, arg8: java.lang.Comparable<T> | java.lang.Comparable$$Lambda<T>)
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