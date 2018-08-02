declare namespace com {
    namespace sun {
        namespace jndi {
            namespace ldap {
                class BerEncoder extends com.sun.jndi.ldap.Ber {
                    public constructor()
                    public constructor(arg0: int)
                    public reset(): void
                    public getDataLen(): int
                    public getBuf(): byte[]
                    public getTrimmedBuf(): byte[]
                    public beginSeq(arg0: int): void
                    public endSeq(): void
                    public encodeByte(arg0: int): void
                    public encodeInt(arg0: int): void
                    public encodeInt(arg0: int, arg1: int): void
                    public encodeBoolean(arg0: boolean): void
                    public encodeBoolean(arg0: boolean, arg1: int): void
                    public encodeString(arg0: java.lang.String | string, arg1: boolean): void
                    public encodeString(arg0: java.lang.String | string, arg1: int, arg2: boolean): void
                    public encodeOctetString(arg0: byte[], arg1: int, arg2: int, arg3: int): void
                    public encodeOctetString(arg0: byte[], arg1: int): void
                    public encodeStringArray(arg0: java.lang.String[], arg1: boolean): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}