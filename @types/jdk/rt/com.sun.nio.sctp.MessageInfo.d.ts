declare namespace com {
    namespace sun {
        namespace nio {
            namespace sctp {
abstract class MessageInfo {
    protected constructor()
    public static createOutgoing(arg0: java.net.SocketAddress, arg1: int): com.sun.nio.sctp.MessageInfo
    public static createOutgoing(arg0: com.sun.nio.sctp.Association, arg1: java.net.SocketAddress, arg2: int): com.sun.nio.sctp.MessageInfo
    public address(): java.net.SocketAddress
    public association(): com.sun.nio.sctp.Association
    public bytes(): int
    public isComplete(): boolean
    public complete(arg0: boolean): com.sun.nio.sctp.MessageInfo
    public isUnordered(): boolean
    public unordered(arg0: boolean): com.sun.nio.sctp.MessageInfo
    public payloadProtocolID(): int
    public payloadProtocolID(arg0: int): com.sun.nio.sctp.MessageInfo
    public streamNumber(): int
    public streamNumber(arg0: int): com.sun.nio.sctp.MessageInfo
    public timeToLive(): long
    public timeToLive(arg0: long): com.sun.nio.sctp.MessageInfo
    public static class: java.lang.Class<any>
}

            }
        }
    }
}