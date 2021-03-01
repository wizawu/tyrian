declare namespace javax {
  namespace management {
    namespace modelmbean {

      class DescriptorSupport implements javax.management.Descriptor {

        public constructor()
        public constructor(arg0: int)
        public constructor(arg0: javax.management.modelmbean.DescriptorSupport)
        public constructor(arg0: java.lang.String)
        public constructor(arg0: java.lang.String[], arg1: java.lang.Object[])
        public constructor(...arg0: java.lang.String[])
        public getFieldValue(arg0: java.lang.String): java.lang.Object
        public setField(arg0: java.lang.String, arg1: java.lang.Object): void
        public getFields(): java.lang.String[]
        public getFieldNames(): java.lang.String[]
        public getFieldValues(...arg0: java.lang.String[]): java.lang.Object[]
        public setFields(arg0: java.lang.String[], arg1: java.lang.Object[]): void
        public clone(): java.lang.Object
        public removeField(arg0: java.lang.String): void
        public equals(arg0: java.lang.Object): boolean
        public hashCode(): int
        public isValid(): boolean
        public toXMLString(): java.lang.String
        public toString(): java.lang.String
      }

    }
  }
}
