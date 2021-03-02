declare namespace java {
  namespace text {

    class AttributedString {
      text: java.lang.String
      runCount: int
      runStarts: int[]
      runAttributes: java.util.Vector<java.text.AttributedCharacterIterator$Attribute>[]
      runAttributeValues: java.util.Vector<java.lang.Object>[]
      constructor(arg0: java.text.AttributedCharacterIterator[])
      public constructor(arg0: java.lang.String | string)
      public constructor(arg0: java.lang.String | string, arg1: java.util.Map<java.text.AttributedCharacterIterator$Attribute,unknown>)
      public constructor(arg0: java.text.AttributedCharacterIterator)
      public constructor(arg0: java.text.AttributedCharacterIterator, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer)
      public constructor(arg0: java.text.AttributedCharacterIterator, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: java.text.AttributedCharacterIterator$Attribute[])
      public addAttribute(arg0: java.text.AttributedCharacterIterator$Attribute, arg1: java.lang.Object | any): void
      public addAttribute(arg0: java.text.AttributedCharacterIterator$Attribute, arg1: java.lang.Object | any, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer): void
      public addAttributes(arg0: java.util.Map<java.text.AttributedCharacterIterator$Attribute,unknown>, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): void
      public getIterator(): java.text.AttributedCharacterIterator
      public getIterator(arg0: java.text.AttributedCharacterIterator$Attribute[]): java.text.AttributedCharacterIterator
      public getIterator(arg0: java.text.AttributedCharacterIterator$Attribute[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): java.text.AttributedCharacterIterator
      length(): number
    }

  }
}
