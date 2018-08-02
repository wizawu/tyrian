declare namespace sun {
    namespace nio {
        namespace fs {
            class LinuxFileSystemProvider extends sun.nio.fs.UnixFileSystemProvider {
                public constructor()
                public getFileAttributeView<V extends java.nio.file.attribute.FileAttributeView>(arg0: java.nio.file.Path, arg1: java.lang.Class<V>, ...arg2: java.nio.file.LinkOption[]): V
                public getFileAttributeView<V extends java.nio.file.attribute.FileAttributeView>(arg0: java.nio.file.Path, arg1: java.lang.String | string, ...arg2: java.nio.file.LinkOption[]): sun.nio.fs.DynamicFileAttributeView
                public readAttributes<A extends java.nio.file.attribute.BasicFileAttributes>(arg0: java.nio.file.Path, arg1: java.lang.Class<A>, ...arg2: java.nio.file.LinkOption[]): A
                public static class: java.lang.Class<any>
            }
        }
    }
}