declare namespace java {
    namespace util {
        namespace zip {
            class ZipUtils {
                public static winTimeToFileTime(arg0: long): java.nio.file.attribute.FileTime
                public static fileTimeToWinTime(arg0: java.nio.file.attribute.FileTime): long
                public static unixTimeToFileTime(arg0: long): java.nio.file.attribute.FileTime
                public static fileTimeToUnixTime(arg0: java.nio.file.attribute.FileTime): long
                public static extendedDosToJavaTime(arg0: long): long
                public static javaToExtendedDosTime(arg0: long): long
                public static get16(arg0: byte[], arg1: int): int
                public static get32(arg0: byte[], arg1: int): long
                public static get64(arg0: byte[], arg1: int): long
                public static class: java.lang.Class<any>
            }
        }
    }
}