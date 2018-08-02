declare namespace java {
    namespace util {
        namespace jar {
            class JavaUtilJarAccessImpl implements sun.misc.JavaUtilJarAccess {
                public jarFileHasClassPathAttribute(arg0: java.util.jar.JarFile): boolean
                public getCodeSources(arg0: java.util.jar.JarFile, arg1: java.net.URL): java.security.CodeSource[]
                public getCodeSource(arg0: java.util.jar.JarFile, arg1: java.net.URL, arg2: java.lang.String | string): java.security.CodeSource
                public entryNames(arg0: java.util.jar.JarFile, arg1: java.security.CodeSource[]): java.util.Enumeration<java.lang.String>
                public entries2(arg0: java.util.jar.JarFile): java.util.Enumeration<java.util.jar.JarEntry>
                public setEagerValidation(arg0: java.util.jar.JarFile, arg1: boolean): void
                public getManifestDigests(arg0: java.util.jar.JarFile): java.util.List<java.lang.Object>
                public static class: java.lang.Class<any>
            }
        }
    }
}