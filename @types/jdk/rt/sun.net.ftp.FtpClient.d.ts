declare namespace sun {
    namespace net {
        namespace ftp {
            abstract class FtpClient implements java.io.Closeable {
                public static defaultPort(): int
                protected constructor()
                public static create(): sun.net.ftp.FtpClient
                public static create(arg0: java.net.InetSocketAddress): sun.net.ftp.FtpClient
                public static create(arg0: java.lang.String | string): sun.net.ftp.FtpClient
                public abstract enablePassiveMode(arg0: boolean): sun.net.ftp.FtpClient
                public abstract isPassiveModeEnabled(): boolean
                public abstract setConnectTimeout(arg0: int): sun.net.ftp.FtpClient
                public abstract getConnectTimeout(): int
                public abstract setReadTimeout(arg0: int): sun.net.ftp.FtpClient
                public abstract getReadTimeout(): int
                public abstract setProxy(arg0: java.net.Proxy): sun.net.ftp.FtpClient
                public abstract getProxy(): java.net.Proxy
                public abstract isConnected(): boolean
                public abstract connect(arg0: java.net.SocketAddress): sun.net.ftp.FtpClient
                public abstract connect(arg0: java.net.SocketAddress, arg1: int): sun.net.ftp.FtpClient
                public abstract getServerAddress(): java.net.SocketAddress
                public abstract login(arg0: java.lang.String | string, arg1: char[]): sun.net.ftp.FtpClient
                public abstract login(arg0: java.lang.String | string, arg1: char[], arg2: java.lang.String | string): sun.net.ftp.FtpClient
                public abstract close(): void
                public abstract isLoggedIn(): boolean
                public abstract changeDirectory(arg0: java.lang.String | string): sun.net.ftp.FtpClient
                public abstract changeToParentDirectory(): sun.net.ftp.FtpClient
                public abstract getWorkingDirectory(): string
                public abstract setRestartOffset(arg0: long): sun.net.ftp.FtpClient
                public abstract getFile(arg0: java.lang.String | string, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda): sun.net.ftp.FtpClient
                public abstract getFileStream(arg0: java.lang.String | string): java.io.InputStream
                public putFileStream(arg0: java.lang.String | string): java.io.OutputStream
                public abstract putFileStream(arg0: java.lang.String | string, arg1: boolean): java.io.OutputStream
                public putFile(arg0: java.lang.String | string, arg1: java.io.InputStream | java.io.InputStream$$Lambda): sun.net.ftp.FtpClient
                public abstract putFile(arg0: java.lang.String | string, arg1: java.io.InputStream | java.io.InputStream$$Lambda, arg2: boolean): sun.net.ftp.FtpClient
                public abstract appendFile(arg0: java.lang.String | string, arg1: java.io.InputStream | java.io.InputStream$$Lambda): sun.net.ftp.FtpClient
                public abstract rename(arg0: java.lang.String | string, arg1: java.lang.String | string): sun.net.ftp.FtpClient
                public abstract deleteFile(arg0: java.lang.String | string): sun.net.ftp.FtpClient
                public abstract makeDirectory(arg0: java.lang.String | string): sun.net.ftp.FtpClient
                public abstract removeDirectory(arg0: java.lang.String | string): sun.net.ftp.FtpClient
                public abstract noop(): sun.net.ftp.FtpClient
                public abstract getStatus(arg0: java.lang.String | string): string
                public abstract getFeatures(): java.util.List<java.lang.String>
                public abstract abort(): sun.net.ftp.FtpClient
                public abstract completePending(): sun.net.ftp.FtpClient
                public abstract reInit(): sun.net.ftp.FtpClient
                public abstract setType(arg0: sun.net.ftp.FtpClient$TransferType): sun.net.ftp.FtpClient
                public setBinaryType(): sun.net.ftp.FtpClient
                public setAsciiType(): sun.net.ftp.FtpClient
                public abstract list(arg0: java.lang.String | string): java.io.InputStream
                public abstract nameList(arg0: java.lang.String | string): java.io.InputStream
                public abstract getSize(arg0: java.lang.String | string): long
                public abstract getLastModified(arg0: java.lang.String | string): java.util.Date
                public abstract setDirParser(arg0: sun.net.ftp.FtpDirParser | sun.net.ftp.FtpDirParser$$Lambda): sun.net.ftp.FtpClient
                public abstract listFiles(arg0: java.lang.String | string): java.util.Iterator<sun.net.ftp.FtpDirEntry>
                public abstract useKerberos(): sun.net.ftp.FtpClient
                public abstract getWelcomeMsg(): string
                public abstract getLastReplyCode(): sun.net.ftp.FtpReplyCode
                public abstract getLastResponseString(): string
                public abstract getLastTransferSize(): long
                public abstract getLastFileName(): string
                public abstract startSecureSession(): sun.net.ftp.FtpClient
                public abstract endSecureSession(): sun.net.ftp.FtpClient
                public abstract allocate(arg0: long): sun.net.ftp.FtpClient
                public abstract structureMount(arg0: java.lang.String | string): sun.net.ftp.FtpClient
                public abstract getSystem(): string
                public abstract getHelp(arg0: java.lang.String | string): string
                public abstract siteCmd(arg0: java.lang.String | string): sun.net.ftp.FtpClient
                public static class: java.lang.Class<any>
            }
        }
    }
}