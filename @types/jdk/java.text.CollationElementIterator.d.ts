declare namespace java {
  namespace text {
    class CollationElementIterator {
      public static readonly NULLORDER: int
      static readonly UNMAPPEDCHARVALUE: int
      constructor(arg0: java.lang.String | string, arg1: java.text.RuleBasedCollator)
      constructor(arg0: java.text.CharacterIterator, arg1: java.text.RuleBasedCollator)
      public reset(): void
      public next(): number
      public previous(): number
      public static primaryOrder(arg0: number | java.lang.Integer): number
      public static secondaryOrder(arg0: number | java.lang.Integer): number
      public static tertiaryOrder(arg0: number | java.lang.Integer): number
      strengthOrder(arg0: number | java.lang.Integer): number
      public setOffset(arg0: number | java.lang.Integer): void
      public getOffset(): number
      public getMaxExpansion(arg0: number | java.lang.Integer): number
      public setText(arg0: java.lang.String | string): void
      public setText(arg0: java.text.CharacterIterator): void
      static isIgnorable(arg0: number | java.lang.Integer): boolean
    }
  }
}
