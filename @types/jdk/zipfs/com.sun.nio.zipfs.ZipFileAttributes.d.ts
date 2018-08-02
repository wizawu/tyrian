declare namespace com {
    namespace sun {
        namespace nio {
            namespace zipfs {
                class ZipFileAttributes implements java.nio.file.attribute.BasicFileAttributes {
                    public creationTime(): java.nio.file.attribute.FileTime
                    public isDirectory(): boolean
                    public isOther(): boolean
                    public isRegularFile(): boolean
                    public lastAccessTime(): java.nio.file.attribute.FileTime
                    public lastModifiedTime(): java.nio.file.attribute.FileTime
                    public size(): long
                    public isSymbolicLink(): boolean
                    public fileKey(): java.lang.Object
                    public compressedSize(): long
                    public crc(): long
                    public method(): int
                    public extra(): byte[]
                    public comment(): byte[]
                    public toString(): string
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}