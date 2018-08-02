declare namespace sun {
    namespace net {
        namespace ftp {
            namespace impl {
                class FtpClient$FtpFileIterator implements java.util.Iterator<sun.net.ftp.FtpDirEntry> , java.io.Closeable {
                    public constructor(arg0: sun.net.ftp.impl.FtpClient, arg1: sun.net.ftp.FtpDirParser | sun.net.ftp.FtpDirParser$$Lambda, arg2: java.io.BufferedReader)
                    public hasNext(): boolean
                    public next(): sun.net.ftp.FtpDirEntry
                    public remove(): void
                    public close(): void
                    public next(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}