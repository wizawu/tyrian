declare namespace sun {
    namespace net {
        namespace www {
            namespace protocol {
                namespace jar {
                    class JarFileFactory implements sun.net.www.protocol.jar.URLJarFile$URLJarFileCloseController {
                        public static getInstance(): sun.net.www.protocol.jar.JarFileFactory
                        public get(arg0: java.net.URL): java.util.jar.JarFile
                        public close(arg0: java.util.jar.JarFile): void
                        public static class: java.lang.Class<any>
                    }
                    class JarFileFactory$$Lambda implements sun.net.www.protocol.jar.URLJarFile$URLJarFileCloseController {
                        public static (): sun.net.www.protocol.jar.JarFileFactory
                    }
                }
            }
        }
    }
}