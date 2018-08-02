declare namespace java {
    namespace util {
        namespace jar {
class JarFile extends java.util.zip.ZipFile {
    public static MANIFEST_NAME: string
    public constructor(arg0: java.lang.String | string)
    public constructor(arg0: java.lang.String | string, arg1: boolean)
    public constructor(arg0: java.io.File)
    public constructor(arg0: java.io.File, arg1: boolean)
    public constructor(arg0: java.io.File, arg1: boolean, arg2: int)
    public getManifest(): java.util.jar.Manifest
    public getJarEntry(arg0: java.lang.String | string): java.util.jar.JarEntry
    public getEntry(arg0: java.lang.String | string): java.util.zip.ZipEntry
    public entries(): java.util.Enumeration<java.util.jar.JarEntry>
    public stream(): java.util.stream.Stream<java.util.jar.JarEntry>
    public getInputStream(arg0: java.util.zip.ZipEntry): java.io.InputStream
    public static class: java.lang.Class<any>
}

        }
    }
}