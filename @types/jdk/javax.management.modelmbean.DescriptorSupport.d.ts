declare namespace javax {
  namespace management {
    namespace modelmbean {
      class DescriptorSupport implements javax.management.Descriptor {
        public constructor()
        public constructor(arg0: number | java.lang.Integer)
        public constructor(arg0: javax.management.modelmbean.DescriptorSupport)
        public constructor(arg0: java.lang.String | string)
        public constructor(arg0: java.lang.String[] | string[], arg1: java.lang.Object[] | any[])
        public constructor(...vargs: (java.lang.String | string)[])
        public getFieldValue(arg0: java.lang.String | string): java.lang.Object
        public setField(arg0: java.lang.String | string, arg1: java.lang.Object | any): void
        public getFields(): java.lang.String[]
        public getFieldNames(): java.lang.String[]
        public getFieldValues(...vargs: (java.lang.String | string)[]): java.lang.Object[]
        public setFields(arg0: java.lang.String[] | string[], arg1: java.lang.Object[] | any[]): void
        public clone(): java.lang.Object
        public removeField(arg0: java.lang.String | string): void
        public equals(arg0: java.lang.Object | any): boolean
        public hashCode(): number
        public isValid(): boolean
        public toXMLString(): java.lang.String
        public toString(): java.lang.String
      }
    }
  }
}
