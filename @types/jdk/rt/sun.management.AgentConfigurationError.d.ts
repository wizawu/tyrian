declare namespace sun {
    namespace management {
        class AgentConfigurationError extends java.lang.Error {
            public static AGENT_EXCEPTION: string
            public static CONFIG_FILE_NOT_FOUND: string
            public static CONFIG_FILE_OPEN_FAILED: string
            public static CONFIG_FILE_CLOSE_FAILED: string
            public static CONFIG_FILE_ACCESS_DENIED: string
            public static EXPORT_ADDRESS_FAILED: string
            public static AGENT_CLASS_NOT_FOUND: string
            public static AGENT_CLASS_FAILED: string
            public static AGENT_CLASS_PREMAIN_NOT_FOUND: string
            public static AGENT_CLASS_ACCESS_DENIED: string
            public static AGENT_CLASS_INVALID: string
            public static INVALID_JMXREMOTE_PORT: string
            public static INVALID_JMXREMOTE_RMI_PORT: string
            public static PASSWORD_FILE_NOT_SET: string
            public static PASSWORD_FILE_NOT_READABLE: string
            public static PASSWORD_FILE_READ_FAILED: string
            public static PASSWORD_FILE_NOT_FOUND: string
            public static ACCESS_FILE_NOT_SET: string
            public static ACCESS_FILE_NOT_READABLE: string
            public static ACCESS_FILE_READ_FAILED: string
            public static ACCESS_FILE_NOT_FOUND: string
            public static PASSWORD_FILE_ACCESS_NOT_RESTRICTED: string
            public static FILE_ACCESS_NOT_RESTRICTED: string
            public static FILE_NOT_FOUND: string
            public static FILE_NOT_READABLE: string
            public static FILE_NOT_SET: string
            public static FILE_READ_FAILED: string
            public static CONNECTOR_SERVER_IO_ERROR: string
            public static INVALID_OPTION: string
            public static INVALID_SNMP_PORT: string
            public static INVALID_SNMP_TRAP_PORT: string
            public static UNKNOWN_SNMP_INTERFACE: string
            public static SNMP_ACL_FILE_NOT_SET: string
            public static SNMP_ACL_FILE_NOT_FOUND: string
            public static SNMP_ACL_FILE_NOT_READABLE: string
            public static SNMP_ACL_FILE_READ_FAILED: string
            public static SNMP_ACL_FILE_ACCESS_NOT_RESTRICTED: string
            public static SNMP_ADAPTOR_START_FAILED: string
            public static SNMP_MIB_INIT_FAILED: string
            public static INVALID_STATE: string
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