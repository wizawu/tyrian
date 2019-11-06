declare namespace sun {
    namespace net {
        namespace util {
            class IPAddressUtil {
                public constructor()
                public static textToNumericFormatV4(arg0: java.lang.String | string): byte[]
                public static textToNumericFormatV6(arg0: java.lang.String | string): byte[]
                public static isIPv4LiteralAddress(arg0: java.lang.String | string): boolean
                public static isIPv6LiteralAddress(arg0: java.lang.String | string): boolean
                public static convertFromIPv4MappedAddress(arg0: byte[]): byte[]
                public static match(arg0: char, arg1: long, arg2: long): boolean
                public static scan(arg0: java.lang.String | string, arg1: long, arg2: long): int
                public static scan(arg0: java.lang.String | string, arg1: long, arg2: long, arg3: char[]): int
                public static checkAuthority(arg0: java.net.URL): string
                public static checkExternalForm(arg0: java.net.URL): string
                public static checkHostString(arg0: java.lang.String | string): string
                public static class: java.lang.Class<any>
            }
        }
    }
}