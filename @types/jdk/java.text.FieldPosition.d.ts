declare namespace java {
  namespace text {

    class FieldPosition {
      field: int
      endIndex: int
      beginIndex: int
      public constructor(arg0: int)
      public constructor(arg0: java.text.Format$Field)
      public constructor(arg0: java.text.Format$Field, arg1: int)
      public getFieldAttribute(): java.text.Format$Field
      public getField(): int
      public getBeginIndex(): int
      public getEndIndex(): int
      public setBeginIndex(arg0: int): void
      public setEndIndex(arg0: int): void
      getFieldDelegate(): java.text.Format$FieldDelegate
      public equals(arg0: java.lang.Object): boolean
      public hashCode(): int
      public toString(): java.lang.String
    }

  }
}
