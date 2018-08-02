declare namespace com {
    namespace sun {
        namespace jndi {
            namespace ldap {
class BerDecoder extends com.sun.jndi.ldap.Ber {
    public constructor(arg0: byte[], arg1: int, arg2: int)
    public reset(): void
    public getParsePosition(): int
    public parseLength(): int
    public parseSeq(arg0: int[]): int
    public parseByte(): int
    public peekByte(): int
    public parseBoolean(): boolean
    public parseEnumeration(): int
    public parseInt(): int
    public parseString(arg0: boolean): string
    public parseStringWithTag(arg0: int, arg1: boolean, arg2: int[]): string
    public parseOctetString(arg0: int, arg1: int[]): byte[]
    public bytesLeft(): int
    public static class: java.lang.Class<any>
}

            }
        }
    }
}