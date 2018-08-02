declare namespace java {
    namespace nio {
        namespace file {
            namespace attribute {
                interface PosixFileAttributeView extends java.nio.file.attribute.BasicFileAttributeView , java.nio.file.attribute.FileOwnerAttributeView {
                    name(): string
                    readAttributes(): java.nio.file.attribute.PosixFileAttributes
                    setPermissions(arg0: java.util.Set<java.nio.file.attribute.PosixFilePermission>): void
                    setGroup(arg0: java.nio.file.attribute.GroupPrincipal): void
                    readAttributes(): java.nio.file.attribute.BasicFileAttributes
                }
            }
        }
    }
}