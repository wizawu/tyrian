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
        public constructor(arg0: java.lang.String)
        public constructor(arg0: java.util.zip.ZipEntry)
        constructor()
        public getName(): java.lang.String
        public setTime(arg0: long): void
        public getTime(): long
        public setTimeLocal(arg0: java.time.LocalDateTime): void
        public getTimeLocal(): java.time.LocalDateTime
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
        setExtra0(arg0: byte[], arg1: boolean, arg2: boolean): void
        public getExtra(): byte[]
        public setComment(arg0: java.lang.String): void
        public getComment(): java.lang.String
        public isDirectory(): boolean
        public toString(): java.lang.String
        public hashCode(): int
        public clone(): java.lang.Object
      }

    }
  }
}
