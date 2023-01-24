declare namespace javax {
  namespace management {
    interface Descriptor extends java.io.Serializable, java.lang.Cloneable {
      getFieldValue(arg0: java.lang.String | string): java.lang.Object
      setField(arg0: java.lang.String | string, arg1: java.lang.Object | any): void
      getFields(): java.lang.String[]
      getFieldNames(): java.lang.String[]
      getFieldValues(...vargs: (java.lang.String | string)[]): java.lang.Object[]
      removeField(arg0: java.lang.String | string): void
      setFields(arg0: java.lang.String[] | string[], arg1: java.lang.Object[] | any[]): void
      clone(): java.lang.Object
      isValid(): boolean
      equals(arg0: java.lang.Object | any): boolean
      hashCode(): number
    }
  }
}
