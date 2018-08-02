declare namespace java {
    namespace nio {
        namespace file {
            namespace attribute {
                interface AclFileAttributeView extends java.nio.file.attribute.FileOwnerAttributeView {
                    name(): string
                    getAcl(): java.util.List<java.nio.file.attribute.AclEntry>
                    setAcl(arg0: java.util.List<java.nio.file.attribute.AclEntry>): void
                }
            }
        }
    }
}