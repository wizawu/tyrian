declare namespace sun {
    namespace net {
        namespace ftp {
            abstract class FtpClientProvider {
                public abstract createFtpClient(): sun.net.ftp.FtpClient
                protected constructor()
                public static provider(): sun.net.ftp.FtpClientProvider
                public static class: java.lang.Class<any>
            }
            interface FtpClientProvider$$Lambda {
                (): sun.net.ftp.FtpClient
            }
        }
    }
}