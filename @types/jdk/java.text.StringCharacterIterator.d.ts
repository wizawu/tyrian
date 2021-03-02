declare namespace java {
  namespace text {

    class StringCharacterIterator implements java.text.CharacterIterator {
      public constructor(arg0: java.lang.String)
      public constructor(arg0: java.lang.String, arg1: int)
      public constructor(arg0: java.lang.String, arg1: int, arg2: int, arg3: int)
      public setText(arg0: java.lang.String): void
      public first(): char
      public last(): char
      public setIndex(arg0: int): char
      public current(): char
      public next(): char
      public previous(): char
      public getBeginIndex(): int
      public getEndIndex(): int
      public getIndex(): int
      public equals(arg0: java.lang.Object): boolean
      public hashCode(): int
      public clone(): java.lang.Object
    }

  }
}
