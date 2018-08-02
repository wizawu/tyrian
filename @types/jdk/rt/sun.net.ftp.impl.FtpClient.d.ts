declare namespace sun {
    namespace net {
        namespace ftp {
            namespace impl {
                class FtpClient extends sun.net.ftp.FtpClient {
                    protected constructor()
                    public static create(): sun.net.ftp.FtpClient
                    public enablePassiveMode(arg0: boolean): sun.net.ftp.FtpClient
                    public isPassiveModeEnabled(): boolean
                    public setConnectTimeout(arg0: int): sun.net.ftp.FtpClient
                    public getConnectTimeout(): int
                    public setReadTimeout(arg0: int): sun.net.ftp.FtpClient
                    public getReadTimeout(): int
                    public setProxy(arg0: java.net.Proxy): sun.net.ftp.FtpClient
                    public getProxy(): java.net.Proxy
                    public isConnected(): boolean
                    public getServerAddress(): java.net.SocketAddress
                    public connect(arg0: java.net.SocketAddress): sun.net.ftp.FtpClient
                    public connect(arg0: java.net.SocketAddress, arg1: int): sun.net.ftp.FtpClient
                    public login(arg0: java.lang.String | string, arg1: char[]): sun.net.ftp.FtpClient
                    public login(arg0: java.lang.String | string, arg1: char[], arg2: java.lang.String | string): sun.net.ftp.FtpClient
                    public close(): void
                    public isLoggedIn(): boolean
                    public changeDirectory(arg0: java.lang.String | string): sun.net.ftp.FtpClient
                    public changeToParentDirectory(): sun.net.ftp.FtpClient
                    public getWorkingDirectory(): string
                    public setRestartOffset(arg0: long): sun.net.ftp.FtpClient
                    public getFile(arg0: java.lang.String | string, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda): sun.net.ftp.FtpClient
                    public getFileStream(arg0: java.lang.String | string): java.io.InputStream
                    public putFileStream(arg0: java.lang.String | string, arg1: boolean): java.io.OutputStream
                    public putFile(arg0: java.lang.String | string, arg1: java.io.InputStream, arg2: boolean): sun.net.ftp.FtpClient
                    public appendFile(arg0: java.lang.String | string, arg1: java.io.InputStream): sun.net.ftp.FtpClient
                    public rename(arg0: java.lang.String | string, arg1: java.lang.String | string): sun.net.ftp.FtpClient
                    public deleteFile(arg0: java.lang.String | string): sun.net.ftp.FtpClient
                    public makeDirectory(arg0: java.lang.String | string): sun.net.ftp.FtpClient
                    public removeDirectory(arg0: java.lang.String | string): sun.net.ftp.FtpClient
                    public noop(): sun.net.ftp.FtpClient
                    public getStatus(arg0: java.lang.String | string): string
                    public getFeatures(): java.util.List<java.lang.String>
                    public abort(): sun.net.ftp.FtpClient
                    public completePending(): sun.net.ftp.FtpClient
                    public reInit(): sun.net.ftp.FtpClient
                    public setType(arg0: sun.net.ftp.FtpClient$TransferType): sun.net.ftp.FtpClient
                    public list(arg0: java.lang.String | string): java.io.InputStream
                    public nameList(arg0: java.lang.String | string): java.io.InputStream
                    public getSize(arg0: java.lang.String | string): long
                    public getLastModified(arg0: java.lang.String | string): java.util.Date
                    public setDirParser(arg0: sun.net.ftp.FtpDirParser | sun.net.ftp.FtpDirParser$$Lambda): sun.net.ftp.FtpClient
                    public listFiles(arg0: java.lang.String | string): java.util.Iterator<sun.net.ftp.FtpDirEntry>
                    public useKerberos(): sun.net.ftp.FtpClient
                    public getWelcomeMsg(): string
                    public getLastReplyCode(): sun.net.ftp.FtpReplyCode
                    public getLastResponseString(): string
                    public getLastTransferSize(): long
                    public getLastFileName(): string
                    public startSecureSession(): sun.net.ftp.FtpClient
                    public endSecureSession(): sun.net.ftp.FtpClient
                    public allocate(arg0: long): sun.net.ftp.FtpClient
                    public structureMount(arg0: java.lang.String | string): sun.net.ftp.FtpClient
                    public getSystem(): string
                    public getHelp(arg0: java.lang.String | string): string
                    public siteCmd(arg0: java.lang.String | string): sun.net.ftp.FtpClient
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}