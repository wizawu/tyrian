declare namespace sun {
    namespace misc {
interface JavaUtilJarAccess {
    jarFileHasClassPathAttribute(arg0: java.util.jar.JarFile): boolean
    getCodeSources(arg0: java.util.jar.JarFile, arg1: java.net.URL): java.security.CodeSource[]
    getCodeSource(arg0: java.util.jar.JarFile, arg1: java.net.URL, arg2: java.lang.String | string): java.security.CodeSource
    entryNames(arg0: java.util.jar.JarFile, arg1: java.security.CodeSource[]): java.util.Enumeration<java.lang.String>
    entries2(arg0: java.util.jar.JarFile): java.util.Enumeration<java.util.jar.JarEntry>
    setEagerValidation(arg0: java.util.jar.JarFile, arg1: boolean): void
    getManifestDigests(arg0: java.util.jar.JarFile): java.util.List<java.lang.Object>
}

    }
}