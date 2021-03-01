declare namespace java {
  namespace text {

    class CollationElementIterator {

      public static readonly NULLORDER: int
      static readonly UNMAPPEDCHARVALUE: int
      constructor(arg0: java.lang.String, arg1: java.text.RuleBasedCollator)
      constructor(arg0: java.text.CharacterIterator, arg1: java.text.RuleBasedCollator)
      public reset(): void
      public next(): int
      public previous(): int
      public static readonly primaryOrder(arg0: int): int
      public static readonly secondaryOrder(arg0: int): short
      public static readonly tertiaryOrder(arg0: int): short
      readonly strengthOrder(arg0: int): int
      public setOffset(arg0: int): void
      public getOffset(): int
      public getMaxExpansion(arg0: int): int
      public setText(arg0: java.lang.String): void
      public setText(arg0: java.text.CharacterIterator): void
      static readonly isIgnorable(arg0: int): boolean
    }

  }
}
