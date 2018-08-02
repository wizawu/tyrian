declare namespace javax {
    namespace management {
class MBeanOperationInfo extends javax.management.MBeanFeatureInfo implements java.lang.Cloneable {
    public static INFO: int
    public static ACTION: int
    public static ACTION_INFO: int
    public static UNKNOWN: int
    public constructor(arg0: java.lang.String | string, arg1: java.lang.reflect.Method)
    public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: javax.management.MBeanParameterInfo[], arg3: java.lang.String | string, arg4: int)
    public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: javax.management.MBeanParameterInfo[], arg3: java.lang.String | string, arg4: int, arg5: javax.management.Descriptor)
    public clone(): java.lang.Object
    public getReturnType(): string
    public getSignature(): javax.management.MBeanParameterInfo[]
    public getImpact(): int
    public toString(): string
    public equals(arg0: java.lang.Object): boolean
    public hashCode(): int
    public static class: java.lang.Class<any>
}

    }
}