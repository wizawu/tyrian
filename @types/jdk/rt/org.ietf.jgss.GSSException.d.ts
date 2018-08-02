declare namespace org {
    namespace ietf {
        namespace jgss {
class GSSException extends java.lang.Exception {
    public static BAD_BINDINGS: int
    public static BAD_MECH: int
    public static BAD_NAME: int
    public static BAD_NAMETYPE: int
    public static BAD_STATUS: int
    public static BAD_MIC: int
    public static CONTEXT_EXPIRED: int
    public static CREDENTIALS_EXPIRED: int
    public static DEFECTIVE_CREDENTIAL: int
    public static DEFECTIVE_TOKEN: int
    public static FAILURE: int
    public static NO_CONTEXT: int
    public static NO_CRED: int
    public static BAD_QOP: int
    public static UNAUTHORIZED: int
    public static UNAVAILABLE: int
    public static DUPLICATE_ELEMENT: int
    public static NAME_NOT_MN: int
    public static DUPLICATE_TOKEN: int
    public static OLD_TOKEN: int
    public static UNSEQ_TOKEN: int
    public static GAP_TOKEN: int
    public constructor(arg0: int)
    public constructor(arg0: int, arg1: int, arg2: java.lang.String | string)
    public getMajor(): int
    public getMinor(): int
    public getMajorString(): string
    public getMinorString(): string
    public setMinor(arg0: int, arg1: java.lang.String | string): void
    public toString(): string
    public getMessage(): string
    public static class: java.lang.Class<any>
}

        }
    }
}