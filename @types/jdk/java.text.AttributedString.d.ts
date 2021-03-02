declare namespace java {
  namespace text {

    class AttributedString {
      text: java.lang.String
      runCount: int
      runStarts: int[]
      runAttributes: java.util.Vector<java.text.AttributedCharacterIterator$Attribute>[]
      runAttributeValues: java.util.Vector<java.lang.Object>[]
      constructor(arg0: java.text.AttributedCharacterIterator[])
      public constructor(arg0: java.lang.String)
      public constructor(arg0: java.lang.String, arg1: java.util.Map<java.text.AttributedCharacterIterator$Attribute,unknown>)
      public constructor(arg0: java.text.AttributedCharacterIterator)
      public constructor(arg0: java.text.AttributedCharacterIterator, arg1: int, arg2: int)
      public constructor(arg0: java.text.AttributedCharacterIterator, arg1: int, arg2: int, arg3: java.text.AttributedCharacterIterator$Attribute[])
      public addAttribute(arg0: java.text.AttributedCharacterIterator$Attribute, arg1: java.lang.Object): void
      public addAttribute(arg0: java.text.AttributedCharacterIterator$Attribute, arg1: java.lang.Object, arg2: int, arg3: int): void
      public addAttributes(arg0: java.util.Map<java.text.AttributedCharacterIterator$Attribute,unknown>, arg1: int, arg2: int): void
      public getIterator(): java.text.AttributedCharacterIterator
      public getIterator(arg0: java.text.AttributedCharacterIterator$Attribute[]): java.text.AttributedCharacterIterator
      public getIterator(arg0: java.text.AttributedCharacterIterator$Attribute[], arg1: int, arg2: int): java.text.AttributedCharacterIterator
      length(): int
    }

  }
}
