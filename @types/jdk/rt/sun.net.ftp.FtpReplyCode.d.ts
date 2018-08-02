declare namespace sun {
    namespace net {
        namespace ftp {
            class FtpReplyCode extends java.lang.Enum<sun.net.ftp.FtpReplyCode> {
                public static RESTART_MARKER: sun.net.ftp.FtpReplyCode
                public static SERVICE_READY_IN: sun.net.ftp.FtpReplyCode
                public static DATA_CONNECTION_ALREADY_OPEN: sun.net.ftp.FtpReplyCode
                public static FILE_STATUS_OK: sun.net.ftp.FtpReplyCode
                public static COMMAND_OK: sun.net.ftp.FtpReplyCode
                public static NOT_IMPLEMENTED: sun.net.ftp.FtpReplyCode
                public static SYSTEM_STATUS: sun.net.ftp.FtpReplyCode
                public static DIRECTORY_STATUS: sun.net.ftp.FtpReplyCode
                public static FILE_STATUS: sun.net.ftp.FtpReplyCode
                public static HELP_MESSAGE: sun.net.ftp.FtpReplyCode
                public static NAME_SYSTEM_TYPE: sun.net.ftp.FtpReplyCode
                public static SERVICE_READY: sun.net.ftp.FtpReplyCode
                public static SERVICE_CLOSING: sun.net.ftp.FtpReplyCode
                public static DATA_CONNECTION_OPEN: sun.net.ftp.FtpReplyCode
                public static CLOSING_DATA_CONNECTION: sun.net.ftp.FtpReplyCode
                public static ENTERING_PASSIVE_MODE: sun.net.ftp.FtpReplyCode
                public static ENTERING_EXT_PASSIVE_MODE: sun.net.ftp.FtpReplyCode
                public static LOGGED_IN: sun.net.ftp.FtpReplyCode
                public static SECURELY_LOGGED_IN: sun.net.ftp.FtpReplyCode
                public static SECURITY_EXCHANGE_OK: sun.net.ftp.FtpReplyCode
                public static SECURITY_EXCHANGE_COMPLETE: sun.net.ftp.FtpReplyCode
                public static FILE_ACTION_OK: sun.net.ftp.FtpReplyCode
                public static PATHNAME_CREATED: sun.net.ftp.FtpReplyCode
                public static NEED_PASSWORD: sun.net.ftp.FtpReplyCode
                public static NEED_ACCOUNT: sun.net.ftp.FtpReplyCode
                public static NEED_ADAT: sun.net.ftp.FtpReplyCode
                public static NEED_MORE_ADAT: sun.net.ftp.FtpReplyCode
                public static FILE_ACTION_PENDING: sun.net.ftp.FtpReplyCode
                public static SERVICE_NOT_AVAILABLE: sun.net.ftp.FtpReplyCode
                public static CANT_OPEN_DATA_CONNECTION: sun.net.ftp.FtpReplyCode
                public static CONNECTION_CLOSED: sun.net.ftp.FtpReplyCode
                public static NEED_SECURITY_RESOURCE: sun.net.ftp.FtpReplyCode
                public static FILE_ACTION_NOT_TAKEN: sun.net.ftp.FtpReplyCode
                public static ACTION_ABORTED: sun.net.ftp.FtpReplyCode
                public static INSUFFICIENT_STORAGE: sun.net.ftp.FtpReplyCode
                public static COMMAND_UNRECOGNIZED: sun.net.ftp.FtpReplyCode
                public static INVALID_PARAMETER: sun.net.ftp.FtpReplyCode
                public static BAD_SEQUENCE: sun.net.ftp.FtpReplyCode
                public static NOT_IMPLEMENTED_FOR_PARAMETER: sun.net.ftp.FtpReplyCode
                public static NOT_LOGGED_IN: sun.net.ftp.FtpReplyCode
                public static NEED_ACCOUNT_FOR_STORING: sun.net.ftp.FtpReplyCode
                public static PROT_LEVEL_DENIED: sun.net.ftp.FtpReplyCode
                public static REQUEST_DENIED: sun.net.ftp.FtpReplyCode
                public static FAILED_SECURITY_CHECK: sun.net.ftp.FtpReplyCode
                public static UNSUPPORTED_PROT_LEVEL: sun.net.ftp.FtpReplyCode
                public static PROT_LEVEL_NOT_SUPPORTED_BY_SECURITY: sun.net.ftp.FtpReplyCode
                public static FILE_UNAVAILABLE: sun.net.ftp.FtpReplyCode
                public static PAGE_TYPE_UNKNOWN: sun.net.ftp.FtpReplyCode
                public static EXCEEDED_STORAGE: sun.net.ftp.FtpReplyCode
                public static FILE_NAME_NOT_ALLOWED: sun.net.ftp.FtpReplyCode
                public static PROTECTED_REPLY: sun.net.ftp.FtpReplyCode
                public static UNKNOWN_ERROR: sun.net.ftp.FtpReplyCode
                public static values(): sun.net.ftp.FtpReplyCode[]
                public static valueOf(arg0: java.lang.String | string): sun.net.ftp.FtpReplyCode
                public getValue(): int
                public isPositivePreliminary(): boolean
                public isPositiveCompletion(): boolean
                public isPositiveIntermediate(): boolean
                public isTransientNegative(): boolean
                public isPermanentNegative(): boolean
                public isProtectedReply(): boolean
                public isSyntax(): boolean
                public isInformation(): boolean
                public isConnection(): boolean
                public isAuthentication(): boolean
                public isUnspecified(): boolean
                public isFileSystem(): boolean
                public static find(arg0: int): sun.net.ftp.FtpReplyCode
                public static class: java.lang.Class<any>
            }
        }
    }
}