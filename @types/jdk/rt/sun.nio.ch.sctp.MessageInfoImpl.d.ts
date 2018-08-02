declare namespace sun {
    namespace nio {
        namespace ch {
            namespace sctp {
class MessageInfoImpl extends com.sun.nio.sctp.MessageInfo {
    public constructor(arg0: com.sun.nio.sctp.Association, arg1: java.net.SocketAddress, arg2: int)
    public association(): com.sun.nio.sctp.Association
    public address(): java.net.SocketAddress
    public bytes(): int
    public streamNumber(): int
    public streamNumber(arg0: int): com.sun.nio.sctp.MessageInfo
    public payloadProtocolID(): int
    public payloadProtocolID(arg0: int): com.sun.nio.sctp.MessageInfo
    public isComplete(): boolean
    public complete(arg0: boolean): com.sun.nio.sctp.MessageInfo
    public isUnordered(): boolean
    public unordered(arg0: boolean): com.sun.nio.sctp.MessageInfo
    public timeToLive(): long
    public timeToLive(arg0: long): com.sun.nio.sctp.MessageInfo
    public toString(): string
    public static class: java.lang.Class<any>
}

            }
        }
    }
}