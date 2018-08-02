declare namespace java {
    namespace nio {
        namespace file {
            namespace attribute {
interface DosFileAttributeView extends java.nio.file.attribute.BasicFileAttributeView {
    name(): string
    readAttributes(): java.nio.file.attribute.DosFileAttributes
    setReadOnly(arg0: boolean): void
    setHidden(arg0: boolean): void
    setSystem(arg0: boolean): void
    setArchive(arg0: boolean): void
    readAttributes(): java.nio.file.attribute.BasicFileAttributes
}

            }
        }
    }
}