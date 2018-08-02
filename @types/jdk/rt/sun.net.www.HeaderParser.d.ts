declare namespace sun {
    namespace net {
        namespace www {
            class HeaderParser {
                public constructor(arg0: java.lang.String | string)
                public subsequence(arg0: int, arg1: int): sun.net.www.HeaderParser
                public findKey(arg0: int): string
                public findValue(arg0: int): string
                public findValue(arg0: java.lang.String | string): string
                public findValue(arg0: java.lang.String | string, arg1: java.lang.String | string): string
                public keys(): java.util.Iterator<java.lang.String>
                public values(): java.util.Iterator<java.lang.String>
                public toString(): string
                public findInt(arg0: java.lang.String | string, arg1: int): int
                public static class: java.lang.Class<any>
            }
        }
    }
}