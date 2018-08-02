declare namespace java {
    namespace util {
        namespace jar {
class JarVerifier {
    public constructor(arg0: byte[])
    public beginEntry(arg0: java.util.jar.JarEntry, arg1: sun.security.util.ManifestEntryVerifier): void
    public update(arg0: int, arg1: sun.security.util.ManifestEntryVerifier): void
    public update(arg0: int, arg1: byte[], arg2: int, arg3: int, arg4: sun.security.util.ManifestEntryVerifier): void
    public getCerts(arg0: java.lang.String | string): java.security.cert.Certificate[]
    public getCerts(arg0: java.util.jar.JarFile, arg1: java.util.jar.JarEntry): java.security.cert.Certificate[]
    public getCodeSigners(arg0: java.lang.String | string): java.security.CodeSigner[]
    public getCodeSigners(arg0: java.util.jar.JarFile, arg1: java.util.jar.JarEntry): java.security.CodeSigner[]
    public entryNames(arg0: java.util.jar.JarFile, arg1: java.security.CodeSource[]): java.util.Enumeration<java.lang.String>
    public entries2(arg0: java.util.jar.JarFile, arg1: java.util.Enumeration<java.util.zip.ZipEntry>): java.util.Enumeration<java.util.jar.JarEntry>
    public getCodeSources(arg0: java.util.jar.JarFile, arg1: java.net.URL): java.security.CodeSource[]
    public getCodeSource(arg0: java.net.URL, arg1: java.lang.String | string): java.security.CodeSource
    public getCodeSource(arg0: java.net.URL, arg1: java.util.jar.JarFile, arg2: java.util.jar.JarEntry): java.security.CodeSource
    public setEagerValidation(arg0: boolean): void
    public getManifestDigests(): java.util.List<java.lang.Object>
    public static class: java.lang.Class<any>
}

        }
    }
}