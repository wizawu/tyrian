declare namespace com {
    namespace sun {
        namespace nio {
            namespace zipfs {
                class ZipFileStore extends java.nio.file.FileStore {
                    public name(): string
                    public type(): string
                    public isReadOnly(): boolean
                    public supportsFileAttributeView(arg0: java.lang.Class<java.nio.file.attribute.FileAttributeView>): boolean
                    public supportsFileAttributeView(arg0: java.lang.String | string): boolean
                    public getFileStoreAttributeView<V extends java.nio.file.attribute.FileStoreAttributeView>(arg0: java.lang.Class<V>): V
                    public getTotalSpace<V extends java.nio.file.attribute.FileStoreAttributeView>(): long
                    public getUsableSpace<V extends java.nio.file.attribute.FileStoreAttributeView>(): long
                    public getUnallocatedSpace<V extends java.nio.file.attribute.FileStoreAttributeView>(): long
                    public getAttribute<V extends java.nio.file.attribute.FileStoreAttributeView>(arg0: java.lang.String | string): java.lang.Object
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}