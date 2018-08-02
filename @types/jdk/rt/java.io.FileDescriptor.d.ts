declare namespace java {
    namespace io {
        class FileDescriptor {
            public static in: java.io.FileDescriptor
            public static out: java.io.FileDescriptor
            public static err: java.io.FileDescriptor
            public constructor()
            public valid(): boolean
            public sync(): void
            public static class: java.lang.Class<any>
        }
    }
}