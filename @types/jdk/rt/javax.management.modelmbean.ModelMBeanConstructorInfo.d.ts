declare namespace javax {
    namespace management {
        namespace modelmbean {
class ModelMBeanConstructorInfo extends javax.management.MBeanConstructorInfo implements javax.management.DescriptorAccess {
    public constructor(arg0: java.lang.String | string, arg1: java.lang.reflect.Constructor<any>)
    public constructor(arg0: java.lang.String | string, arg1: java.lang.reflect.Constructor<any>, arg2: javax.management.Descriptor)
    public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: javax.management.MBeanParameterInfo[])
    public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: javax.management.MBeanParameterInfo[], arg3: javax.management.Descriptor)
    public clone(): java.lang.Object
    public getDescriptor(): javax.management.Descriptor
    public setDescriptor(arg0: javax.management.Descriptor): void
    public toString(): string
    public static class: java.lang.Class<any>
}

        }
    }
}