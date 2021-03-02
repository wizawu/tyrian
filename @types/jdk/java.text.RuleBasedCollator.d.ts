declare namespace java {
  namespace text {

    class RuleBasedCollator extends java.text.Collator {
      static readonly CHARINDEX: int
      static readonly EXPANDCHARINDEX: int
      static readonly CONTRACTCHARINDEX: int
      static readonly UNMAPPED: int
      public constructor(arg0: java.lang.String | string)
      constructor(arg0: java.lang.String | string, arg1: number | java.lang.Integer)
      public getRules(): java.lang.String
      public getCollationElementIterator(arg0: java.lang.String | string): java.text.CollationElementIterator
      public getCollationElementIterator(arg0: java.text.CharacterIterator): java.text.CollationElementIterator
      public compare(arg0: java.lang.String | string, arg1: java.lang.String | string): number
      public getCollationKey(arg0: java.lang.String | string): java.text.CollationKey
      public clone(): java.lang.Object
      public equals(arg0: java.lang.Object | any): boolean
      public hashCode(): number
      getTables(): java.text.RBCollationTables
    }

  }
}
