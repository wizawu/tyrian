declare namespace com {
    namespace sun {
        namespace nio {
            namespace zipfs {
                class ZipUtils {
                    public static writeShort(arg0: java.io.OutputStream, arg1: int): void
                    public static writeInt(arg0: java.io.OutputStream, arg1: long): void
                    public static writeLong(arg0: java.io.OutputStream, arg1: long): void
                    public static writeBytes(arg0: java.io.OutputStream, arg1: byte[]): void
                    public static writeBytes(arg0: java.io.OutputStream, arg1: byte[], arg2: int, arg3: int): void
                    public static toDirectoryPath(arg0: byte[]): byte[]
                    public static dosToJavaTime(arg0: long): long
                    public static javaToDosTime(arg0: long): long
                    public static winToJavaTime(arg0: long): long
                    public static javaToWinTime(arg0: long): long
                    public static unixToJavaTime(arg0: long): long
                    public static javaToUnixTime(arg0: long): long
                    public static toRegexPattern(arg0: java.lang.String | string): string
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}