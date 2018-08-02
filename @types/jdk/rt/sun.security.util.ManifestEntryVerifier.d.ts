declare namespace sun {
    namespace security {
        namespace util {
            class ManifestEntryVerifier {
                public constructor(arg0: java.util.jar.Manifest)
                public setEntry(arg0: java.lang.String | string, arg1: java.util.jar.JarEntry): void
                public update(arg0: byte): void
                public update(arg0: byte[], arg1: int, arg2: int): void
                public getEntry(): java.util.jar.JarEntry
                public verify(arg0: java.util.Hashtable<java.lang.String, java.security.CodeSigner[]>, arg1: java.util.Hashtable<java.lang.String, java.security.CodeSigner[]>): java.security.CodeSigner[]
                public static class: java.lang.Class<any>
            }
        }
    }
}