declare namespace java {
  namespace text {

    class StringCharacterIterator implements java.text.CharacterIterator {
      public constructor(arg0: java.lang.String | string)
      public constructor(arg0: java.lang.String | string, arg1: number | java.lang.Integer)
      public constructor(arg0: java.lang.String | string, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer)
      public setText(arg0: java.lang.String | string): void
      public first(): string
      public last(): string
      public setIndex(arg0: number | java.lang.Integer): string
      public current(): string
      public next(): string
      public previous(): string
      public getBeginIndex(): number
      public getEndIndex(): number
      public getIndex(): number
      public equals(arg0: java.lang.Object | any): boolean
      public hashCode(): number
      public clone(): java.lang.Object
    }

  }
}
