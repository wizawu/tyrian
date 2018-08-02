declare namespace sun {
    namespace net {
        namespace ftp {
class FtpDirEntry {
    public constructor(arg0: java.lang.String | string)
    public getName(): string
    public getUser(): string
    public setUser(arg0: java.lang.String | string): sun.net.ftp.FtpDirEntry
    public getGroup(): string
    public setGroup(arg0: java.lang.String | string): sun.net.ftp.FtpDirEntry
    public getSize(): long
    public setSize(arg0: long): sun.net.ftp.FtpDirEntry
    public getType(): sun.net.ftp.FtpDirEntry$Type
    public setType(arg0: sun.net.ftp.FtpDirEntry$Type): sun.net.ftp.FtpDirEntry
    public getLastModified(): java.util.Date
    public setLastModified(arg0: java.util.Date): sun.net.ftp.FtpDirEntry
    public canRead(arg0: sun.net.ftp.FtpDirEntry$Permission): boolean
    public canWrite(arg0: sun.net.ftp.FtpDirEntry$Permission): boolean
    public canExexcute(arg0: sun.net.ftp.FtpDirEntry$Permission): boolean
    public setPermissions(arg0: boolean[][]): sun.net.ftp.FtpDirEntry
    public addFact(arg0: java.lang.String | string, arg1: java.lang.String | string): sun.net.ftp.FtpDirEntry
    public getFact(arg0: java.lang.String | string): string
    public getCreated(): java.util.Date
    public setCreated(arg0: java.util.Date): sun.net.ftp.FtpDirEntry
    public toString(): string
    public static class: java.lang.Class<any>
}

        }
    }
}