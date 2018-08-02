declare namespace java {
    namespace util {
        namespace regex {
class Pattern implements java.io.Serializable {
    public static UNIX_LINES: int
    public static CASE_INSENSITIVE: int
    public static COMMENTS: int
    public static MULTILINE: int
    public static LITERAL: int
    public static DOTALL: int
    public static UNICODE_CASE: int
    public static CANON_EQ: int
    public static UNICODE_CHARACTER_CLASS: int
    public static compile(arg0: java.lang.String | string): java.util.regex.Pattern
    public static compile(arg0: java.lang.String | string, arg1: int): java.util.regex.Pattern
    public pattern(): string
    public toString(): string
    public matcher(arg0: java.lang.CharSequence): java.util.regex.Matcher
    public flags(): int
    public static matches(arg0: java.lang.String | string, arg1: java.lang.CharSequence): boolean
    public split(arg0: java.lang.CharSequence, arg1: int): java.lang.String[]
    public split(arg0: java.lang.CharSequence): java.lang.String[]
    public static quote(arg0: java.lang.String | string): string
    public asPredicate(): java.util.function$.Predicate<java.lang.String>
    public splitAsStream(arg0: java.lang.CharSequence): java.util.stream.Stream<java.lang.String>
    public static class: java.lang.Class<any>
}

        }
    }
}