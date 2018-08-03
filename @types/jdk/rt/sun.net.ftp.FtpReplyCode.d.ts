declare namespace sun {
    namespace net {
        namespace ftp {
            class FtpReplyCode extends java.lang.Enum<sun.net.ftp.FtpReplyCode> {
                public static readonly RESTART_MARKER: sun.net.ftp.FtpReplyCode
                public static readonly SERVICE_READY_IN: sun.net.ftp.FtpReplyCode
                public static readonly DATA_CONNECTION_ALREADY_OPEN: sun.net.ftp.FtpReplyCode
                public static readonly FILE_STATUS_OK: sun.net.ftp.FtpReplyCode
                public static readonly COMMAND_OK: sun.net.ftp.FtpReplyCode
                public static readonly NOT_IMPLEMENTED: sun.net.ftp.FtpReplyCode
                public static readonly SYSTEM_STATUS: sun.net.ftp.FtpReplyCode
                public static readonly DIRECTORY_STATUS: sun.net.ftp.FtpReplyCode
                public static readonly FILE_STATUS: sun.net.ftp.FtpReplyCode
                public static readonly HELP_MESSAGE: sun.net.ftp.FtpReplyCode
                public static readonly NAME_SYSTEM_TYPE: sun.net.ftp.FtpReplyCode
                public static readonly SERVICE_READY: sun.net.ftp.FtpReplyCode
                public static readonly SERVICE_CLOSING: sun.net.ftp.FtpReplyCode
                public static readonly DATA_CONNECTION_OPEN: sun.net.ftp.FtpReplyCode
                public static readonly CLOSING_DATA_CONNECTION: sun.net.ftp.FtpReplyCode
                public static readonly ENTERING_PASSIVE_MODE: sun.net.ftp.FtpReplyCode
                public static readonly ENTERING_EXT_PASSIVE_MODE: sun.net.ftp.FtpReplyCode
                public static readonly LOGGED_IN: sun.net.ftp.FtpReplyCode
                public static readonly SECURELY_LOGGED_IN: sun.net.ftp.FtpReplyCode
                public static readonly SECURITY_EXCHANGE_OK: sun.net.ftp.FtpReplyCode
                public static readonly SECURITY_EXCHANGE_COMPLETE: sun.net.ftp.FtpReplyCode
                public static readonly FILE_ACTION_OK: sun.net.ftp.FtpReplyCode
                public static readonly PATHNAME_CREATED: sun.net.ftp.FtpReplyCode
                public static readonly NEED_PASSWORD: sun.net.ftp.FtpReplyCode
                public static readonly NEED_ACCOUNT: sun.net.ftp.FtpReplyCode
                public static readonly NEED_ADAT: sun.net.ftp.FtpReplyCode
                public static readonly NEED_MORE_ADAT: sun.net.ftp.FtpReplyCode
                public static readonly FILE_ACTION_PENDING: sun.net.ftp.FtpReplyCode
                public static readonly SERVICE_NOT_AVAILABLE: sun.net.ftp.FtpReplyCode
                public static readonly CANT_OPEN_DATA_CONNECTION: sun.net.ftp.FtpReplyCode
                public static readonly CONNECTION_CLOSED: sun.net.ftp.FtpReplyCode
                public static readonly NEED_SECURITY_RESOURCE: sun.net.ftp.FtpReplyCode
                public static readonly FILE_ACTION_NOT_TAKEN: sun.net.ftp.FtpReplyCode
                public static readonly ACTION_ABORTED: sun.net.ftp.FtpReplyCode
                public static readonly INSUFFICIENT_STORAGE: sun.net.ftp.FtpReplyCode
                public static readonly COMMAND_UNRECOGNIZED: sun.net.ftp.FtpReplyCode
                public static readonly INVALID_PARAMETER: sun.net.ftp.FtpReplyCode
                public static readonly BAD_SEQUENCE: sun.net.ftp.FtpReplyCode
                public static readonly NOT_IMPLEMENTED_FOR_PARAMETER: sun.net.ftp.FtpReplyCode
                public static readonly NOT_LOGGED_IN: sun.net.ftp.FtpReplyCode
                public static readonly NEED_ACCOUNT_FOR_STORING: sun.net.ftp.FtpReplyCode
                public static readonly PROT_LEVEL_DENIED: sun.net.ftp.FtpReplyCode
                public static readonly REQUEST_DENIED: sun.net.ftp.FtpReplyCode
                public static readonly FAILED_SECURITY_CHECK: sun.net.ftp.FtpReplyCode
                public static readonly UNSUPPORTED_PROT_LEVEL: sun.net.ftp.FtpReplyCode
                public static readonly PROT_LEVEL_NOT_SUPPORTED_BY_SECURITY: sun.net.ftp.FtpReplyCode
                public static readonly FILE_UNAVAILABLE: sun.net.ftp.FtpReplyCode
                public static readonly PAGE_TYPE_UNKNOWN: sun.net.ftp.FtpReplyCode
                public static readonly EXCEEDED_STORAGE: sun.net.ftp.FtpReplyCode
                public static readonly FILE_NAME_NOT_ALLOWED: sun.net.ftp.FtpReplyCode
                public static readonly PROTECTED_REPLY: sun.net.ftp.FtpReplyCode
                public static readonly UNKNOWN_ERROR: sun.net.ftp.FtpReplyCode
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