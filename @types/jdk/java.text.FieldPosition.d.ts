declare namespace java {
  namespace text {
    class FieldPosition {
      field: int
      endIndex: int
      beginIndex: int
      public constructor(arg0: number | java.lang.Integer)
      public constructor(arg0: java.text.Format$Field)
      public constructor(arg0: java.text.Format$Field, arg1: number | java.lang.Integer)
      public getFieldAttribute(): java.text.Format$Field
      public getField(): number
      public getBeginIndex(): number
      public getEndIndex(): number
      public setBeginIndex(arg0: number | java.lang.Integer): void
      public setEndIndex(arg0: number | java.lang.Integer): void
      getFieldDelegate(): java.text.Format$FieldDelegate
      public equals(arg0: java.lang.Object | any): boolean
      public hashCode(): number
      public toString(): java.lang.String
    }
  }
}
