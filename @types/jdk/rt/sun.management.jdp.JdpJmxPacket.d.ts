declare namespace sun {
    namespace management {
        namespace jdp {
            class JdpJmxPacket extends sun.management.jdp.JdpGenericPacket implements sun.management.jdp.JdpPacket {
                public static readonly UUID_KEY: string
                public static readonly MAIN_CLASS_KEY: string
                public static readonly JMX_SERVICE_URL_KEY: string
                public static readonly INSTANCE_NAME_KEY: string
                public static readonly PROCESS_ID_KEY: string
                public static readonly RMI_HOSTNAME_KEY: string
                public static readonly BROADCAST_INTERVAL_KEY: string
                public constructor(arg0: java.util.UUID, arg1: java.lang.String | string)
                public constructor(arg0: byte[])
                public setMainClass(arg0: java.lang.String | string): void
                public setInstanceName(arg0: java.lang.String | string): void
                public getId(): java.util.UUID
                public getMainClass(): string
                public getJmxServiceUrl(): string
                public getInstanceName(): string
                public getProcessId(): string
                public setProcessId(arg0: java.lang.String | string): void
                public getRmiHostname(): string
                public setRmiHostname(arg0: java.lang.String | string): void
                public getBroadcastInterval(): string
                public setBroadcastInterval(arg0: java.lang.String | string): void
                public getPacketData(): byte[]
                public hashCode(): int
                public equals(arg0: java.lang.Object): boolean
                public static class: java.lang.Class<any>
            }
        }
    }
}