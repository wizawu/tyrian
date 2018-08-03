declare namespace sun {
    namespace management {
        class AgentConfigurationError extends java.lang.Error {
            public static readonly AGENT_EXCEPTION: string
            public static readonly CONFIG_FILE_NOT_FOUND: string
            public static readonly CONFIG_FILE_OPEN_FAILED: string
            public static readonly CONFIG_FILE_CLOSE_FAILED: string
            public static readonly CONFIG_FILE_ACCESS_DENIED: string
            public static readonly EXPORT_ADDRESS_FAILED: string
            public static readonly AGENT_CLASS_NOT_FOUND: string
            public static readonly AGENT_CLASS_FAILED: string
            public static readonly AGENT_CLASS_PREMAIN_NOT_FOUND: string
            public static readonly AGENT_CLASS_ACCESS_DENIED: string
            public static readonly AGENT_CLASS_INVALID: string
            public static readonly INVALID_JMXREMOTE_PORT: string
            public static readonly INVALID_JMXREMOTE_RMI_PORT: string
            public static readonly PASSWORD_FILE_NOT_SET: string
            public static readonly PASSWORD_FILE_NOT_READABLE: string
            public static readonly PASSWORD_FILE_READ_FAILED: string
            public static readonly PASSWORD_FILE_NOT_FOUND: string
            public static readonly ACCESS_FILE_NOT_SET: string
            public static readonly ACCESS_FILE_NOT_READABLE: string
            public static readonly ACCESS_FILE_READ_FAILED: string
            public static readonly ACCESS_FILE_NOT_FOUND: string
            public static readonly PASSWORD_FILE_ACCESS_NOT_RESTRICTED: string
            public static readonly FILE_ACCESS_NOT_RESTRICTED: string
            public static readonly FILE_NOT_FOUND: string
            public static readonly FILE_NOT_READABLE: string
            public static readonly FILE_NOT_SET: string
            public static readonly FILE_READ_FAILED: string
            public static readonly CONNECTOR_SERVER_IO_ERROR: string
            public static readonly INVALID_OPTION: string
            public static readonly INVALID_SNMP_PORT: string
            public static readonly INVALID_SNMP_TRAP_PORT: string
            public static readonly UNKNOWN_SNMP_INTERFACE: string
            public static readonly SNMP_ACL_FILE_NOT_SET: string
            public static readonly SNMP_ACL_FILE_NOT_FOUND: string
            public static readonly SNMP_ACL_FILE_NOT_READABLE: string
            public static readonly SNMP_ACL_FILE_READ_FAILED: string
            public static readonly SNMP_ACL_FILE_ACCESS_NOT_RESTRICTED: string
            public static readonly SNMP_ADAPTOR_START_FAILED: string
            public static readonly SNMP_MIB_INIT_FAILED: string
            public static readonly INVALID_STATE: string
            public constructor(arg0: java.lang.String | string)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.Throwable)
            public constructor(arg0: java.lang.String | string, ...arg1: java.lang.String[])
            public constructor(arg0: java.lang.String | string, arg1: java.lang.Throwable, ...arg2: java.lang.String[])
            public getError(): string
            public getParams(): java.lang.String[]
            public static class: java.lang.Class<any>
        }
    }
}