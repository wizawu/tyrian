declare namespace java {
    namespace nio {
        namespace file {
            namespace attribute {
interface BasicFileAttributeView extends java.nio.file.attribute.FileAttributeView {
    name(): string
    readAttributes(): java.nio.file.attribute.BasicFileAttributes
    setTimes(arg0: java.nio.file.attribute.FileTime, arg1: java.nio.file.attribute.FileTime, arg2: java.nio.file.attribute.FileTime): void
}

            }
        }
    }
}