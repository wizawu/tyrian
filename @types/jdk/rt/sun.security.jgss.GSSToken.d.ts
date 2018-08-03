declare namespace sun {
    namespace security {
        namespace jgss {
            abstract class GSSToken {
                public constructor()
                public static writeLittleEndian(arg0: int, arg1: byte[]): void
                public static writeLittleEndian(arg0: int, arg1: byte[], arg2: int): void
                public static writeBigEndian(arg0: int, arg1: byte[]): void
                public static writeBigEndian(arg0: int, arg1: byte[], arg2: int): void
                public static readLittleEndian(arg0: byte[], arg1: int, arg2: int): int
                public static readBigEndian(arg0: byte[], arg1: int, arg2: int): int
                public static writeInt(arg0: int, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                public static writeInt(arg0: int, arg1: byte[], arg2: int): int
                public static readInt(arg0: java.io.InputStream | java.io.InputStream$$Lambda): int
                public static readInt(arg0: byte[], arg1: int): int
                public static readFully(arg0: java.io.InputStream | java.io.InputStream$$Lambda, arg1: byte[]): void
                public static readFully(arg0: java.io.InputStream | java.io.InputStream$$Lambda, arg1: byte[], arg2: int, arg3: int): void
                public static debug(arg0: java.lang.String | string): void
                public static getHexBytes(arg0: byte[]): string
                public static getHexBytes(arg0: byte[], arg1: int): string
                public static getHexBytes(arg0: byte[], arg1: int, arg2: int): string
                public static class: java.lang.Class<any>
            }
        }
    }
}