declare namespace java {
    namespace text {
class AttributedString {
    public constructor(arg0: java.lang.String | string)
    public constructor(arg0: java.lang.String | string, arg1: java.util.Map<java.text.AttributedCharacterIterator$Attribute, any>)
    public constructor(arg0: java.text.AttributedCharacterIterator)
    public constructor(arg0: java.text.AttributedCharacterIterator, arg1: int, arg2: int)
    public constructor(arg0: java.text.AttributedCharacterIterator, arg1: int, arg2: int, arg3: java.text.AttributedCharacterIterator$Attribute[])
    public addAttribute(arg0: java.text.AttributedCharacterIterator$Attribute, arg1: java.lang.Object): void
    public addAttribute(arg0: java.text.AttributedCharacterIterator$Attribute, arg1: java.lang.Object, arg2: int, arg3: int): void
    public addAttributes(arg0: java.util.Map<java.text.AttributedCharacterIterator$Attribute, any>, arg1: int, arg2: int): void
    public getIterator(): java.text.AttributedCharacterIterator
    public getIterator(arg0: java.text.AttributedCharacterIterator$Attribute[]): java.text.AttributedCharacterIterator
    public getIterator(arg0: java.text.AttributedCharacterIterator$Attribute[], arg1: int, arg2: int): java.text.AttributedCharacterIterator
    public static class: java.lang.Class<any>
}

    }
}