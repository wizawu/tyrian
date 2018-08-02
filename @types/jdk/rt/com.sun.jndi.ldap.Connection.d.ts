declare namespace com {
    namespace sun {
        namespace jndi {
            namespace ldap {
                class Connection implements java.lang.Runnable {
                    public host: string
                    public port: int
                    public inStream: java.io.InputStream
                    public outStream: java.io.OutputStream
                    public sock: java.net.Socket
                    public replaceStreams(arg0: java.io.InputStream, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                    public run(): void
                    public static class: java.lang.Class<any>
                }
                class Connection$$Lambda implements java.lang.Runnable {
                    public host: string
                }
            }
        }
    }
}