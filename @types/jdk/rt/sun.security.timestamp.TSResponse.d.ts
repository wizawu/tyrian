declare namespace sun {
    namespace security {
        namespace timestamp {
class TSResponse {
    public static GRANTED: int
    public static GRANTED_WITH_MODS: int
    public static REJECTION: int
    public static WAITING: int
    public static REVOCATION_WARNING: int
    public static REVOCATION_NOTIFICATION: int
    public static BAD_ALG: int
    public static BAD_REQUEST: int
    public static BAD_DATA_FORMAT: int
    public static TIME_NOT_AVAILABLE: int
    public static UNACCEPTED_POLICY: int
    public static UNACCEPTED_EXTENSION: int
    public static ADD_INFO_NOT_AVAILABLE: int
    public static SYSTEM_FAILURE: int
    public getStatusCode(): int
    public getStatusMessages(): java.lang.String[]
    public getFailureInfo(): boolean[]
    public getStatusCodeAsText(): string
    public getFailureCodeAsText(): string
    public getToken(): sun.security.pkcs.PKCS7
    public getTimestampToken(): sun.security.timestamp.TimestampToken
    public getEncodedToken(): byte[]
    public static class: java.lang.Class<any>
}

        }
    }
}