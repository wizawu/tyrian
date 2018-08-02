declare namespace sun {
    namespace nio {
        namespace fs {
abstract class UnixFileStore extends java.nio.file.FileStore {
    public name(): string
    public type(): string
    public isReadOnly(): boolean
    public getTotalSpace(): long
    public getUsableSpace(): long
    public getUnallocatedSpace(): long
    public getFileStoreAttributeView<V extends java.nio.file.attribute.FileStoreAttributeView>(arg0: java.lang.Class<V>): V
    public getAttribute<V extends java.nio.file.attribute.FileStoreAttributeView>(arg0: java.lang.String | string): java.lang.Object
    public supportsFileAttributeView<V extends java.nio.file.attribute.FileStoreAttributeView>(arg0: java.lang.Class<java.nio.file.attribute.FileAttributeView>): boolean
    public supportsFileAttributeView<V extends java.nio.file.attribute.FileStoreAttributeView>(arg0: java.lang.String | string): boolean
    public equals<V extends java.nio.file.attribute.FileStoreAttributeView>(arg0: java.lang.Object): boolean
    public hashCode<V extends java.nio.file.attribute.FileStoreAttributeView>(): int
    public toString<V extends java.nio.file.attribute.FileStoreAttributeView>(): string
    public static class: java.lang.Class<any>
}

        }
    }
}