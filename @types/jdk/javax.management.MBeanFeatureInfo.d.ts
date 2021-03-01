declare namespace javax {
  namespace management {

    class MBeanFeatureInfo implements java.io.Serializable, javax.management.DescriptorRead {

      static readonly serialVersionUID: long
      protected name: java.lang.String
      protected description: java.lang.String
      public constructor(arg0: java.lang.String, arg1: java.lang.String)
      public constructor(arg0: java.lang.String, arg1: java.lang.String, arg2: javax.management.Descriptor)
      public getName(): java.lang.String
      public getDescription(): java.lang.String
      public getDescriptor(): javax.management.Descriptor
      public equals(arg0: java.lang.Object): boolean
      public hashCode(): int
    }

  }
}
