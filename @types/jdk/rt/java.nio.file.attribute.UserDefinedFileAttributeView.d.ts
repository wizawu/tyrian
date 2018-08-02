declare namespace java {
    namespace nio {
        namespace file {
            namespace attribute {
                interface UserDefinedFileAttributeView extends java.nio.file.attribute.FileAttributeView {
                    name(): string
                    list(): java.util.List<java.lang.String>
                    size(arg0: java.lang.String | string): int
                    read(arg0: java.lang.String | string, arg1: java.nio.ByteBuffer): int
                    write(arg0: java.lang.String | string, arg1: java.nio.ByteBuffer): int
                    delete(arg0: java.lang.String | string): void
                }
            }
        }
    }
}