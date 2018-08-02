declare namespace javax {
    namespace management {
        class MBeanAttributeInfo extends javax.management.MBeanFeatureInfo implements java.lang.Cloneable {
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: boolean, arg4: boolean, arg5: boolean)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: boolean, arg4: boolean, arg5: boolean, arg6: javax.management.Descriptor)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.reflect.Method, arg3: java.lang.reflect.Method)
            public clone(): java.lang.Object
            public getType(): string
            public isReadable(): boolean
            public isWritable(): boolean
            public isIs(): boolean
            public toString(): string
            public equals(arg0: java.lang.Object): boolean
            public hashCode(): int
            public static class: java.lang.Class<any>
        }
    }
}