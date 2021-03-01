declare namespace java {
  namespace text {

    class RuleBasedCollator extends java.text.Collator {

      static readonly CHARINDEX: int
      static readonly EXPANDCHARINDEX: int
      static readonly CONTRACTCHARINDEX: int
      static readonly UNMAPPED: int
      public constructor(arg0: java.lang.String)
      constructor(arg0: java.lang.String, arg1: int)
      public getRules(): java.lang.String
      public getCollationElementIterator(arg0: java.lang.String): java.text.CollationElementIterator
      public getCollationElementIterator(arg0: java.text.CharacterIterator): java.text.CollationElementIterator
      public compare(arg0: java.lang.String, arg1: java.lang.String): int
      public getCollationKey(arg0: java.lang.String): java.text.CollationKey
      public clone(): java.lang.Object
      public equals(arg0: java.lang.Object): boolean
      public hashCode(): int
      getTables(): java.text.RBCollationTables
    }

  }
}
