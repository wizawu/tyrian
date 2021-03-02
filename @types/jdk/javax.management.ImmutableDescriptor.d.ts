declare namespace javax {
  namespace management {

    class ImmutableDescriptor implements javax.management.Descriptor {
      public static readonly EMPTY_DESCRIPTOR: javax.management.ImmutableDescriptor
      public constructor(arg0: java.lang.String[], arg1: java.lang.Object[])
      public constructor(...arg0: java.lang.String[])
      public constructor(arg0: java.util.Map<java.lang.String,unknown>)
      public static union(...arg0: javax.management.Descriptor[]): javax.management.ImmutableDescriptor
      public getFieldValue(arg0: java.lang.String): java.lang.Object
      public getFields(): java.lang.String[]
      public getFieldValues(...arg0: java.lang.String[]): java.lang.Object[]
      public getFieldNames(): java.lang.String[]
      public equals(arg0: java.lang.Object): boolean
      public hashCode(): int
      public toString(): java.lang.String
      public isValid(): boolean
      public clone(): javax.management.Descriptor
      public setFields(arg0: java.lang.String[], arg1: java.lang.Object[]): void
      public setField(arg0: java.lang.String, arg1: java.lang.Object): void
      public removeField(arg0: java.lang.String): void
      static nonNullDescriptor(arg0: javax.management.Descriptor): javax.management.Descriptor
      public clone(): java.lang.Object
    }

  }
}
