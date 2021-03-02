declare namespace java {
  namespace text {

    interface CharacterIterator extends java.lang.Cloneable {
      public static readonly DONE: char
      first(): string
      last(): string
      current(): string
      next(): string
      previous(): string
      setIndex(arg0: number | java.lang.Integer): string
      getBeginIndex(): number
      getEndIndex(): number
      getIndex(): number
      clone(): java.lang.Object
    }

  }
}
