declare namespace java {
    namespace util {
        namespace jar {
            class JarInputStream extends java.util.zip.ZipInputStream {
                public constructor(arg0: java.io.InputStream | java.io.InputStream$$Lambda)
                public constructor(arg0: java.io.InputStream | java.io.InputStream$$Lambda, arg1: boolean)
                public getManifest(): java.util.jar.Manifest
                public getNextEntry(): java.util.zip.ZipEntry
                public getNextJarEntry(): java.util.jar.JarEntry
                public read(arg0: byte[], arg1: int, arg2: int): int
                protected createZipEntry(arg0: java.lang.String | string): java.util.zip.ZipEntry
                public static class: java.lang.Class<any>
            }
        }
    }
}