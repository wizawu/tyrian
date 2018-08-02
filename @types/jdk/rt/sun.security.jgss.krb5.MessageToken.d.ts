declare namespace sun {
    namespace security {
        namespace jgss {
            namespace krb5 {
abstract class MessageToken extends sun.security.jgss.krb5.Krb5Token {
    public getGSSHeader(): sun.security.jgss.GSSHeader
    public getTokenId(): int
    public getEncSeqNumber(): byte[]
    public getChecksum(): byte[]
    public getConfState(): boolean
    public genSignAndSeqNumber(arg0: org.ietf.jgss.MessageProp, arg1: byte[], arg2: byte[], arg3: int, arg4: int, arg5: byte[]): void
    public verifySignAndSeqNumber(arg0: byte[], arg1: byte[], arg2: int, arg3: int, arg4: byte[]): boolean
    public getSequenceNumber(): int
    public encode(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
    protected getKrb5TokenSize(): int
    protected getTokenSize(): int
    protected static getTokenSize(arg0: sun.security.jgss.krb5.CipherHelper): int
    protected getSealAlg(arg0: boolean, arg1: int): int
    protected getSgnAlg(arg0: int): int
    public static class: java.lang.Class<any>
}

            }
        }
    }
}