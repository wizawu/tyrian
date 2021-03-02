declare namespace java {
  namespace text {

    interface AttributedCharacterIterator extends java.text.CharacterIterator {
      getRunStart(): number
      getRunStart(arg0: java.text.AttributedCharacterIterator$Attribute): number
      getRunStart(arg0: java.util.Set<java.text.AttributedCharacterIterator$Attribute>): number
      getRunLimit(): number
      getRunLimit(arg0: java.text.AttributedCharacterIterator$Attribute): number
      getRunLimit(arg0: java.util.Set<java.text.AttributedCharacterIterator$Attribute>): number
      getAttributes(): java.util.Map<java.text.AttributedCharacterIterator$Attribute,java.lang.Object>
      getAttribute(arg0: java.text.AttributedCharacterIterator$Attribute): java.lang.Object
      getAllAttributeKeys(): java.util.Set<java.text.AttributedCharacterIterator$Attribute>
    }

  }
}
