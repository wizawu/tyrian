declare namespace java {
    namespace util {
        namespace zip {
            class ZipEntry implements java.util.zip.ZipConstants , java.lang.Cloneable {
                public static readonly STORED: int
                public static readonly DEFLATED: int
                public constructor(arg0: java.lang.String | string)
                public constructor(arg0: java.util.zip.ZipEntry)
                public getName(): string
                public setTime(arg0: long): void
                public getTime(): long
                public setLastModifiedTime(arg0: java.nio.file.attribute.FileTime): java.util.zip.ZipEntry
                public getLastModifiedTime(): java.nio.file.attribute.FileTime
                public setLastAccessTime(arg0: java.nio.file.attribute.FileTime): java.util.zip.ZipEntry
                public getLastAccessTime(): java.nio.file.attribute.FileTime
                public setCreationTime(arg0: java.nio.file.attribute.FileTime): java.util.zip.ZipEntry
                public getCreationTime(): java.nio.file.attribute.FileTime
                public setSize(arg0: long): void
                public getSize(): long
                public getCompressedSize(): long
                public setCompressedSize(arg0: long): void
                public setCrc(arg0: long): void
                public getCrc(): long
                public setMethod(arg0: int): void
                public getMethod(): int
                public setExtra(arg0: byte[]): void
                public getExtra(): byte[]
                public setComment(arg0: java.lang.String | string): void
                public getComment(): string
                public isDirectory(): boolean
                public toString(): string
                public hashCode(): int
                public clone(): java.lang.Object
                public static class: java.lang.Class<any>
            }
        }
    }
}