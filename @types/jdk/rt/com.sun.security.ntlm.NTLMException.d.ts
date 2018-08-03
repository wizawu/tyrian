declare namespace com {
    namespace sun {
        namespace security {
            namespace ntlm {
                class NTLMException extends java.security.GeneralSecurityException {
                    public static readonly PACKET_READ_ERROR: int
                    public static readonly NO_DOMAIN_INFO: int
                    public static readonly USER_UNKNOWN: int
                    public static readonly AUTH_FAILED: int
                    public static readonly BAD_VERSION: int
                    public static readonly PROTOCOL: int
                    public constructor(arg0: int, arg1: java.lang.String | string)
                    public errorCode(): int
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}