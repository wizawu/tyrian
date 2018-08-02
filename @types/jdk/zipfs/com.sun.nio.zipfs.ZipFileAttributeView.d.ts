declare namespace com {
    namespace sun {
        namespace nio {
            namespace zipfs {
                class ZipFileAttributeView implements java.nio.file.attribute.BasicFileAttributeView {
                    public name(): string
                    public readAttributes(): com.sun.nio.zipfs.ZipFileAttributes
                    public setTimes(arg0: java.nio.file.attribute.FileTime, arg1: java.nio.file.attribute.FileTime, arg2: java.nio.file.attribute.FileTime): void
                    public readAttributes(): java.nio.file.attribute.BasicFileAttributes
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}