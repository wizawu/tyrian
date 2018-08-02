declare namespace com {
    namespace sun {
        namespace nio {
            namespace zipfs {
                class JarFileSystemProvider extends com.sun.nio.zipfs.ZipFileSystemProvider {
                    public constructor()
                    public getScheme(): string
                    protected uriToPath(arg0: java.net.URI): java.nio.file.Path
                    public getPath(arg0: java.net.URI): java.nio.file.Path
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}