declare namespace javax {
    namespace management {
class MBeanFeatureInfo implements java.io.Serializable , javax.management.DescriptorRead {
    protected name: string
    protected description: string
    public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
    public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: javax.management.Descriptor)
    public getName(): string
    public getDescription(): string
    public getDescriptor(): javax.management.Descriptor
    public equals(arg0: java.lang.Object): boolean
    public hashCode(): int
    public static class: java.lang.Class<any>
}

class MBeanFeatureInfo$$Lambda implements java.io.Serializable , javax.management.DescriptorRead {
    protected name: string
}

    }
}