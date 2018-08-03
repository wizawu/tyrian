declare namespace com {
    namespace sun {
        namespace nio {
            namespace sctp {
                abstract class MessageInfo {
                    protected constructor()
                    public static createOutgoing(arg0: java.net.SocketAddress, arg1: int): com.sun.nio.sctp.MessageInfo
                    public static createOutgoing(arg0: com.sun.nio.sctp.Association, arg1: java.net.SocketAddress, arg2: int): com.sun.nio.sctp.MessageInfo
                    public abstract address(): java.net.SocketAddress
                    public abstract association(): com.sun.nio.sctp.Association
                    public abstract bytes(): int
                    public abstract isComplete(): boolean
                    public abstract complete(arg0: boolean): com.sun.nio.sctp.MessageInfo
                    public abstract isUnordered(): boolean
                    public abstract unordered(arg0: boolean): com.sun.nio.sctp.MessageInfo
                    public abstract payloadProtocolID(): int
                    public abstract payloadProtocolID(arg0: int): com.sun.nio.sctp.MessageInfo
                    public abstract streamNumber(): int
                    public abstract streamNumber(arg0: int): com.sun.nio.sctp.MessageInfo
                    public abstract timeToLive(): long
                    public abstract timeToLive(arg0: long): com.sun.nio.sctp.MessageInfo
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}