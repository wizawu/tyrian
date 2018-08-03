declare namespace sun {
    namespace security {
        namespace timestamp {
            class TSResponse {
                public static readonly GRANTED: int
                public static readonly GRANTED_WITH_MODS: int
                public static readonly REJECTION: int
                public static readonly WAITING: int
                public static readonly REVOCATION_WARNING: int
                public static readonly REVOCATION_NOTIFICATION: int
                public static readonly BAD_ALG: int
                public static readonly BAD_REQUEST: int
                public static readonly BAD_DATA_FORMAT: int
                public static readonly TIME_NOT_AVAILABLE: int
                public static readonly UNACCEPTED_POLICY: int
                public static readonly UNACCEPTED_EXTENSION: int
                public static readonly ADD_INFO_NOT_AVAILABLE: int
                public static readonly SYSTEM_FAILURE: int
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