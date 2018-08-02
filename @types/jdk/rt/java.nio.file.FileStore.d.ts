declare namespace java {
    namespace nio {
        namespace file {
            abstract class FileStore {
                protected constructor()
                public name(): string
                public type(): string
                public isReadOnly(): boolean
                public getTotalSpace(): long
                public getUsableSpace(): long
                public getUnallocatedSpace(): long
                public supportsFileAttributeView(arg0: java.lang.Class<java.nio.file.attribute.FileAttributeView>): boolean
                public supportsFileAttributeView(arg0: java.lang.String | string): boolean
                public getFileStoreAttributeView<V extends java.nio.file.attribute.FileStoreAttributeView>(arg0: java.lang.Class<V>): V
                public getAttribute(arg0: java.lang.String | string): java.lang.Object
                public static class: java.lang.Class<any>
            }
        }
    }
}