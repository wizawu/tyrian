declare namespace java {
    namespace time {
        namespace format {
            class DateTimeFormatterBuilder$PrefixTree {
                protected key: string
                protected value: string
                protected c0: char
                protected child: java.time.format.DateTimeFormatterBuilder$PrefixTree
                protected sibling: java.time.format.DateTimeFormatterBuilder$PrefixTree
                public static newTree(arg0: java.time.format.DateTimeParseContext): java.time.format.DateTimeFormatterBuilder$PrefixTree
                public static newTree(arg0: java.util.Set<java.lang.String>, arg1: java.time.format.DateTimeParseContext): java.time.format.DateTimeFormatterBuilder$PrefixTree
                public copyTree(): java.time.format.DateTimeFormatterBuilder$PrefixTree
                public add(arg0: java.lang.String | string, arg1: java.lang.String | string): boolean
                public match(arg0: java.lang.CharSequence, arg1: int, arg2: int): string
                public match(arg0: java.lang.CharSequence, arg1: java.text.ParsePosition): string
                protected toKey(arg0: java.lang.String | string): string
                protected newNode(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.time.format.DateTimeFormatterBuilder$PrefixTree): java.time.format.DateTimeFormatterBuilder$PrefixTree
                protected isEqual(arg0: char, arg1: char): boolean
                protected prefixOf(arg0: java.lang.CharSequence, arg1: int, arg2: int): boolean
                public static class: java.lang.Class<any>
            }
        }
    }
}