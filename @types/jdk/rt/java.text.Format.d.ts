declare namespace java {
    namespace text {
        abstract class Format implements java.io.Serializable , java.lang.Cloneable {
            protected constructor()
            public format(arg0: java.lang.Object): string
            public format(arg0: java.lang.Object, arg1: java.lang.StringBuffer, arg2: java.text.FieldPosition): java.lang.StringBuffer
            public formatToCharacterIterator(arg0: java.lang.Object): java.text.AttributedCharacterIterator
            public parseObject(arg0: java.lang.String | string, arg1: java.text.ParsePosition): java.lang.Object
            public parseObject(arg0: java.lang.String | string): java.lang.Object
            public clone(): java.lang.Object
            public static class: java.lang.Class<any>
        }
    }
}