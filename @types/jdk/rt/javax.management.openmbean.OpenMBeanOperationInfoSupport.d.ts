declare namespace javax {
    namespace management {
        namespace openmbean {
            class OpenMBeanOperationInfoSupport extends javax.management.MBeanOperationInfo implements javax.management.openmbean.OpenMBeanOperationInfo {
                public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: javax.management.openmbean.OpenMBeanParameterInfo[], arg3: javax.management.openmbean.OpenType<any>, arg4: int)
                public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: javax.management.openmbean.OpenMBeanParameterInfo[], arg3: javax.management.openmbean.OpenType<any>, arg4: int, arg5: javax.management.Descriptor)
                public getReturnOpenType(): javax.management.openmbean.OpenType<any>
                public equals(arg0: java.lang.Object): boolean
                public hashCode(): int
                public toString(): string
                public static class: java.lang.Class<any>
            }
        }
    }
}