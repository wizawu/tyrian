declare namespace java {
  namespace text {
    abstract class Format implements java.io.Serializable, java.lang.Cloneable {
      protected constructor()
      public format(arg0: java.lang.Object | any): java.lang.String
      public abstract format(
        arg0: java.lang.Object | any,
        arg1: java.lang.StringBuffer,
        arg2: java.text.FieldPosition
      ): java.lang.StringBuffer
      public formatToCharacterIterator(arg0: java.lang.Object | any): java.text.AttributedCharacterIterator
      public abstract parseObject(arg0: java.lang.String | string, arg1: java.text.ParsePosition): java.lang.Object
      public parseObject(arg0: java.lang.String | string): java.lang.Object
      public clone(): java.lang.Object
      createAttributedCharacterIterator(arg0: java.lang.String | string): java.text.AttributedCharacterIterator
      createAttributedCharacterIterator(
        arg0: java.text.AttributedCharacterIterator[]
      ): java.text.AttributedCharacterIterator
      createAttributedCharacterIterator(
        arg0: java.lang.String | string,
        arg1: java.text.AttributedCharacterIterator$Attribute,
        arg2: java.lang.Object | any
      ): java.text.AttributedCharacterIterator
      createAttributedCharacterIterator(
        arg0: java.text.AttributedCharacterIterator,
        arg1: java.text.AttributedCharacterIterator$Attribute,
        arg2: java.lang.Object | any
      ): java.text.AttributedCharacterIterator
    }
  }
}
