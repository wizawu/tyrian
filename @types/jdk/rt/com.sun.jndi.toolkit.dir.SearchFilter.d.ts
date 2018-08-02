declare namespace com {
    namespace sun {
        namespace jndi {
            namespace toolkit {
                namespace dir {
class SearchFilter implements com.sun.jndi.toolkit.dir.AttrFilter {
    protected static debug: boolean
    protected static BEGIN_FILTER_TOKEN: char
    protected static END_FILTER_TOKEN: char
    protected static AND_TOKEN: char
    protected static OR_TOKEN: char
    protected static NOT_TOKEN: char
    protected static EQUAL_TOKEN: char
    protected static APPROX_TOKEN: char
    protected static LESS_TOKEN: char
    protected static GREATER_TOKEN: char
    protected static EXTEND_TOKEN: char
    protected static WILDCARD_TOKEN: char
    public constructor(arg0: java.lang.String | string)
    public check(arg0: javax.naming.directory.Attributes): boolean
    protected normalizeFilter(): void
    protected createNextFilter(): com.sun.jndi.toolkit.dir.SearchFilter$StringFilter
    protected getCurrentChar(): char
    protected relCharAt(arg0: int): char
    protected consumeChar(): void
    protected consumeChars(arg0: int): void
    protected relIndexOf(arg0: int): int
    protected relSubstring(arg0: int, arg1: int): string
    public static format(arg0: javax.naming.directory.Attributes): string
    public static findUnescaped(arg0: char, arg1: java.lang.String | string, arg2: int): int
    public static format(arg0: java.lang.String | string, arg1: java.lang.Object[]): string
    public static selectAttributes(arg0: javax.naming.directory.Attributes, arg1: java.lang.String[]): javax.naming.directory.Attributes
    public static class: java.lang.Class<any>
}

class SearchFilter$$Lambda implements com.sun.jndi.toolkit.dir.AttrFilter {
    protected static debug: boolean
}

                }
            }
        }
    }
}