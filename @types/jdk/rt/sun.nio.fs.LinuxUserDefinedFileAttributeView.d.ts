declare namespace sun {
    namespace nio {
        namespace fs {
            class LinuxUserDefinedFileAttributeView extends sun.nio.fs.AbstractUserDefinedFileAttributeView {
                public list(): java.util.List<java.lang.String>
                public size(arg0: java.lang.String | string): int
                public read(arg0: java.lang.String | string, arg1: java.nio.ByteBuffer): int
                public write(arg0: java.lang.String | string, arg1: java.nio.ByteBuffer): int
                public delete(arg0: java.lang.String | string): void
                public static class: java.lang.Class<any>
            }
        }
    }
}