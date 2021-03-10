declare namespace java {
  namespace util {
    namespace zip {

      class ZipEntry implements java.util.zip.ZipConstants, java.lang.Cloneable {
        name: java.lang.String
        xdostime: long
        mtime: java.nio.file.attribute.FileTime
        atime: java.nio.file.attribute.FileTime
        ctime: java.nio.file.attribute.FileTime
        crc: long
        size: long
        csize: long
        method: int
        flag: int
        extra: byte[]
        comment: java.lang.String
        public static readonly STORED: int
        public static readonly DEFLATED: int
        static readonly DOSTIME_BEFORE_1980: long
        public constructor(arg0: java.lang.String | string)
        public constructor(arg0: java.util.zip.ZipEntry)
        constructor()
        public getName(): java.lang.String
        public setTime(arg0: number | java.lang.Long): void
        public getTime(): number
        public setTimeLocal(arg0: java.time.LocalDateTime): void
        public getTimeLocal(): java.time.LocalDateTime
        public setLastModifiedTime(arg0: java.nio.file.attribute.FileTime): java.util.zip.ZipEntry
        public getLastModifiedTime(): java.nio.file.attribute.FileTime
        public setLastAccessTime(arg0: java.nio.file.attribute.FileTime): java.util.zip.ZipEntry
        public getLastAccessTime(): java.nio.file.attribute.FileTime
        public setCreationTime(arg0: java.nio.file.attribute.FileTime): java.util.zip.ZipEntry
        public getCreationTime(): java.nio.file.attribute.FileTime
        public setSize(arg0: number | java.lang.Long): void
        public getSize(): number
        public getCompressedSize(): number
        public setCompressedSize(arg0: number | java.lang.Long): void
        public setCrc(arg0: number | java.lang.Long): void
        public getCrc(): number
        public setMethod(arg0: number | java.lang.Integer): void
        public getMethod(): number
        public setExtra(arg0: number[] | java.lang.Byte[]): void
        setExtra0(arg0: number[] | java.lang.Byte[], arg1: boolean | java.lang.Boolean, arg2: boolean | java.lang.Boolean): void
        public getExtra(): number[]
        public setComment(arg0: java.lang.String | string): void
        public getComment(): java.lang.String
        public isDirectory(): boolean
        public toString(): java.lang.String
        public hashCode(): number
        public clone(): java.lang.Object
      }

    }
  }
}
