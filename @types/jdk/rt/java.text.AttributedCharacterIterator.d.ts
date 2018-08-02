declare namespace java {
    namespace text {
interface AttributedCharacterIterator extends java.text.CharacterIterator {
    getRunStart(): int
    getRunStart(arg0: java.text.AttributedCharacterIterator$Attribute): int
    getRunStart(arg0: java.util.Set<java.text.AttributedCharacterIterator$Attribute>): int
    getRunLimit(): int
    getRunLimit(arg0: java.text.AttributedCharacterIterator$Attribute): int
    getRunLimit(arg0: java.util.Set<java.text.AttributedCharacterIterator$Attribute>): int
    getAttributes(): java.util.Map<java.text.AttributedCharacterIterator$Attribute, java.lang.Object>
    getAttribute(arg0: java.text.AttributedCharacterIterator$Attribute): java.lang.Object
    getAllAttributeKeys(): java.util.Set<java.text.AttributedCharacterIterator$Attribute>
}

    }
}