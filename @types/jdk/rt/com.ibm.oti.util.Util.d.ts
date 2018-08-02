declare namespace com {
    namespace ibm {
        namespace oti {
            namespace util {
                class Util {
                    public constructor()
                    public static getBytes(arg0: java.lang.String | string): byte[]
                    public static toString(arg0: byte[]): string
                    public static convertFromUTF8(arg0: byte[], arg1: int, arg2: int): string
                    public static convertUTF8WithBuf(arg0: byte[], arg1: char[], arg2: int, arg3: int): string
                    public static urlEncode(arg0: java.lang.String | string): string
                    public static startsWithDriveLetter(arg0: java.lang.String | string): boolean
                    public static canonicalizePath(arg0: java.lang.String | string): string
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}