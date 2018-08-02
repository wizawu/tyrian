declare namespace java {
    namespace text {
class RuleBasedCollator extends java.text.Collator {
    public constructor(arg0: java.lang.String | string)
    public getRules(): string
    public getCollationElementIterator(arg0: java.lang.String | string): java.text.CollationElementIterator
    public getCollationElementIterator(arg0: java.text.CharacterIterator): java.text.CollationElementIterator
    public compare(arg0: java.lang.String | string, arg1: java.lang.String | string): int
    public getCollationKey(arg0: java.lang.String | string): java.text.CollationKey
    public clone(): java.lang.Object
    public equals(arg0: java.lang.Object): boolean
    public hashCode(): int
    public static class: java.lang.Class<any>
}

    }
}