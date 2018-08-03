declare namespace java {
    namespace nio {
        namespace file {
            abstract class FileStore {
                protected constructor()
                public abstract name(): string
                public abstract type(): string
                public abstract isReadOnly(): boolean
                public abstract getTotalSpace(): long
                public abstract getUsableSpace(): long
                public abstract getUnallocatedSpace(): long
                public abstract supportsFileAttributeView(arg0: java.lang.Class<java.nio.file.attribute.FileAttributeView>): boolean
                public abstract supportsFileAttributeView(arg0: java.lang.String | string): boolean
                public abstract getFileStoreAttributeView<V extends java.nio.file.attribute.FileStoreAttributeView>(arg0: java.lang.Class<V>): V
                public abstract getAttribute<V extends java.nio.file.attribute.FileStoreAttributeView>(arg0: java.lang.String | string): java.lang.Object
                public static class: java.lang.Class<any>
            }
        }
    }
}