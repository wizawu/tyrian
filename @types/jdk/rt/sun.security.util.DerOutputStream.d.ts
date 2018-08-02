declare namespace sun {
    namespace security {
        namespace util {
class DerOutputStream extends java.io.ByteArrayOutputStream implements sun.security.util.DerEncoder {
    public constructor(arg0: int)
    public constructor()
    public write(arg0: byte, arg1: byte[]): void
    public write(arg0: byte, arg1: sun.security.util.DerOutputStream | sun.security.util.DerOutputStream$$Lambda): void
    public writeImplicit(arg0: byte, arg1: sun.security.util.DerOutputStream | sun.security.util.DerOutputStream$$Lambda): void
    public putDerValue(arg0: sun.security.util.DerValue): void
    public putBoolean(arg0: boolean): void
    public putEnumerated(arg0: int): void
    public putInteger(arg0: java.math.BigInteger): void
    public putInteger(arg0: java.lang.Integer): void
    public putInteger(arg0: int): void
    public putBitString(arg0: byte[]): void
    public putUnalignedBitString(arg0: sun.security.util.BitArray): void
    public putTruncatedUnalignedBitString(arg0: sun.security.util.BitArray): void
    public putOctetString(arg0: byte[]): void
    public putNull(): void
    public putOID(arg0: sun.security.util.ObjectIdentifier): void
    public putSequence(arg0: sun.security.util.DerValue[]): void
    public putSet(arg0: sun.security.util.DerValue[]): void
    public putOrderedSetOf(arg0: byte, arg1: sun.security.util.DerEncoder[]): void
    public putOrderedSet(arg0: byte, arg1: sun.security.util.DerEncoder[]): void
    public putUTF8String(arg0: java.lang.String | string): void
    public putPrintableString(arg0: java.lang.String | string): void
    public putT61String(arg0: java.lang.String | string): void
    public putIA5String(arg0: java.lang.String | string): void
    public putBMPString(arg0: java.lang.String | string): void
    public putGeneralString(arg0: java.lang.String | string): void
    public putUTCTime(arg0: java.util.Date): void
    public putGeneralizedTime(arg0: java.util.Date): void
    public putLength(arg0: int): void
    public putTag(arg0: byte, arg1: boolean, arg2: byte): void
    public derEncode(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
    public static class: java.lang.Class<any>
}

class DerOutputStream$$Lambda extends java.io.ByteArrayOutputStream implements sun.security.util.DerEncoder {
    public constructor(arg0: int)
}

        }
    }
}