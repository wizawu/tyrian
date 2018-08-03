declare namespace com {
    namespace sun {
        namespace java {
            namespace util {
                namespace jar {
                    namespace pack {
                        class Package$File implements java.lang.Comparable<com.sun.java.util.jar.pack.Package$File> {
                            public isDirectory(): boolean
                            public isClassStub(): boolean
                            public getStubClass(): com.sun.java.util.jar.pack.Package$Class
                            public isTrivialClassStub(): boolean
                            public equals(arg0: java.lang.Object): boolean
                            public hashCode(): int
                            public compareTo(arg0: com.sun.java.util.jar.pack.Package$File): int
                            public toString(): string
                            public getFileName(): java.io.File
                            public getFileName(arg0: java.io.File): java.io.File
                            public addBytes(arg0: byte[]): void
                            public addBytes(arg0: byte[], arg1: int, arg2: int): void
                            public getFileLength(): long
                            public writeTo(arg0: java.io.OutputStream): void
                            public readFrom(arg0: java.io.InputStream): void
                            public getInputStream(): java.io.InputStream
                            protected visitRefs(arg0: int, arg1: java.util.Collection<com.sun.java.util.jar.pack.ConstantPool$Entry>): void
                            public compareTo(arg0: java.lang.Object): int
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}