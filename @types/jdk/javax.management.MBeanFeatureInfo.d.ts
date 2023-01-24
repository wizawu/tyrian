declare namespace javax {
  namespace management {
    class MBeanFeatureInfo implements java.io.Serializable, javax.management.DescriptorRead {
      static readonly serialVersionUID: long
      protected name: java.lang.String
      protected description: java.lang.String
      public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
      public constructor(
        arg0: java.lang.String | string,
        arg1: java.lang.String | string,
        arg2: javax.management.Descriptor
      )
      public getName(): java.lang.String
      public getDescription(): java.lang.String
      public getDescriptor(): javax.management.Descriptor
      public equals(arg0: java.lang.Object | any): boolean
      public hashCode(): number
    }
  }
}
