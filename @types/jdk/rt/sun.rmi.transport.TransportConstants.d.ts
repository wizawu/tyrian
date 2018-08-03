declare namespace sun {
    namespace rmi {
        namespace transport {
            class TransportConstants {
                public static readonly Magic: int
                public static readonly Version: short
                public static readonly StreamProtocol: byte
                public static readonly SingleOpProtocol: byte
                public static readonly MultiplexProtocol: byte
                public static readonly ProtocolAck: byte
                public static readonly ProtocolNack: byte
                public static readonly Call: byte
                public static readonly Return: byte
                public static readonly Ping: byte
                public static readonly PingAck: byte
                public static readonly DGCAck: byte
                public static readonly NormalReturn: byte
                public static readonly ExceptionalReturn: byte
                public constructor()
                public static class: java.lang.Class<any>
            }
        }
    }
}