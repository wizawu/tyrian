declare namespace sun {
    namespace security {
        namespace x509 {
            class CertException extends java.lang.SecurityException {
                public static readonly verf_INVALID_SIG: int
                public static readonly verf_INVALID_REVOKED: int
                public static readonly verf_INVALID_NOTBEFORE: int
                public static readonly verf_INVALID_EXPIRED: int
                public static readonly verf_CA_UNTRUSTED: int
                public static readonly verf_CHAIN_LENGTH: int
                public static readonly verf_PARSE_ERROR: int
                public static readonly err_CONSTRUCTION: int
                public static readonly err_INVALID_PUBLIC_KEY: int
                public static readonly err_INVALID_VERSION: int
                public static readonly err_INVALID_FORMAT: int
                public static readonly err_ENCODING: int
                public constructor(arg0: int, arg1: java.lang.String | string)
                public constructor(arg0: int)
                public getVerfCode(): int
                public getMoreData(): string
                public getVerfDescription(): string
                public toString(): string
                public getMessage(): string
                public static class: java.lang.Class<any>
            }
        }
    }
}