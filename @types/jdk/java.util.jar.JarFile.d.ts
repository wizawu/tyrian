declare namespace java {
  namespace util {
    namespace jar {
      class JarFile extends java.util.zip.ZipFile {
        public static readonly MANIFEST_NAME: java.lang.String
        public static baseVersion(): java.lang.Runtime$Version
        public static runtimeVersion(): java.lang.Runtime$Version
        public constructor(arg0: java.lang.String | string)
        public constructor(arg0: java.lang.String | string, arg1: boolean | java.lang.Boolean)
        public constructor(arg0: java.io.File)
        public constructor(arg0: java.io.File, arg1: boolean | java.lang.Boolean)
        public constructor(arg0: java.io.File, arg1: boolean | java.lang.Boolean, arg2: number | java.lang.Integer)
        public constructor(
          arg0: java.io.File,
          arg1: boolean | java.lang.Boolean,
          arg2: number | java.lang.Integer,
          arg3: java.lang.Runtime$Version
        )
        public getVersion(): java.lang.Runtime$Version
        public isMultiRelease(): boolean
        public getManifest(): java.util.jar.Manifest
        public getJarEntry(arg0: java.lang.String | string): java.util.jar.JarEntry
        public getEntry(arg0: java.lang.String | string): java.util.zip.ZipEntry
        public entries(): java.util.Enumeration<java.util.jar.JarEntry>
        public stream(): java.util.stream.Stream<java.util.jar.JarEntry>
        public versionedStream(): java.util.stream.Stream<java.util.jar.JarEntry>
        getRealName(arg0: java.util.jar.JarEntry): java.lang.String
        public getInputStream(arg0: java.util.zip.ZipEntry): java.io.InputStream
        hasClassPathAttribute(): boolean
        ensureInitialization(): void
        static isInitializing(): boolean
        newEntry(arg0: java.util.jar.JarEntry): java.util.jar.JarEntry
        newEntry(arg0: java.lang.String | string): java.util.jar.JarEntry
        entryNames(arg0: java.security.CodeSource[]): java.util.Enumeration<java.lang.String>
        entries2(): java.util.Enumeration<java.util.jar.JarEntry>
        getCodeSources(arg0: java.net.URL): java.security.CodeSource[]
        getCodeSource(arg0: java.net.URL, arg1: java.lang.String | string): java.security.CodeSource
        setEagerValidation(arg0: boolean | java.lang.Boolean): void
        getManifestDigests(): java.util.List<java.lang.Object>
      }
    }
  }
}
