declare namespace java {
    namespace nio {
        namespace file {
            class FileTreeIterator implements java.util.Iterator<java.nio.file.FileTreeWalker$Event> , java.io.Closeable {
                public hasNext(): boolean
                public next(): java.nio.file.FileTreeWalker$Event
                public close(): void
                public next(): java.lang.Object
                public static class: java.lang.Class<any>
            }
        }
    }
}