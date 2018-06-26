declare namespace com {
    namespace sun {
        namespace nio {
            namespace sctp {
                class AbstractNotificationHandler<T> implements com.sun.nio.sctp.NotificationHandler<T> {
                    protected constructor()
                    public handleNotification(arg0: com.sun.nio.sctp.Notification | com.sun.nio.sctp.Notification$$Lambda, arg1: T): com.sun.nio.sctp.HandlerResult
                    public handleNotification(arg0: com.sun.nio.sctp.AssociationChangeNotification | com.sun.nio.sctp.AssociationChangeNotification$$Lambda, arg1: T): com.sun.nio.sctp.HandlerResult
                    public handleNotification(arg0: com.sun.nio.sctp.PeerAddressChangeNotification | com.sun.nio.sctp.PeerAddressChangeNotification$$Lambda, arg1: T): com.sun.nio.sctp.HandlerResult
                    public handleNotification(arg0: com.sun.nio.sctp.SendFailedNotification | com.sun.nio.sctp.SendFailedNotification$$Lambda, arg1: T): com.sun.nio.sctp.HandlerResult
                    public handleNotification(arg0: com.sun.nio.sctp.ShutdownNotification | com.sun.nio.sctp.ShutdownNotification$$Lambda, arg1: T): com.sun.nio.sctp.HandlerResult
                    public static class: java.lang.Class<any>
                }
                class Association {
                    protected constructor(arg0: int, arg1: int, arg2: int)
                    public associationID(): int
                    public maxInboundStreams(): int
                    public maxOutboundStreams(): int
                    public static class: java.lang.Class<any>
                }
                abstract class AssociationChangeNotification implements com.sun.nio.sctp.Notification {
                    protected constructor()
                    public association(): com.sun.nio.sctp.Association
                    public event(): com.sun.nio.sctp.AssociationChangeNotification$AssocChangeEvent
                    public static class: java.lang.Class<any>
                }
                abstract class AssociationChangeNotification$$Lambda implements com.sun.nio.sctp.Notification {
                    protected constructor()
                }
                class HandlerResult extends java.lang.Enum<com.sun.nio.sctp.HandlerResult> {
                    public static CONTINUE: com.sun.nio.sctp.HandlerResult
                    public static RETURN: com.sun.nio.sctp.HandlerResult
                    public static values(): com.sun.nio.sctp.HandlerResult[]
                    public static valueOf(arg0: java.lang.String | string): com.sun.nio.sctp.HandlerResult
                    public static class: java.lang.Class<any>
                }
                class IllegalReceiveException extends java.lang.IllegalStateException {
                    public constructor()
                    public constructor(arg0: java.lang.String | string)
                    public static class: java.lang.Class<any>
                }
                class IllegalUnbindException extends java.lang.IllegalStateException {
                    public constructor()
                    public constructor(arg0: java.lang.String | string)
                    public static class: java.lang.Class<any>
                }
                class InvalidStreamException extends java.lang.IllegalArgumentException {
                    public constructor()
                    public constructor(arg0: java.lang.String | string)
                    public static class: java.lang.Class<any>
                }
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
                interface Notification {
                    association(): com.sun.nio.sctp.Association
                }
                interface Notification$$Lambda {
                    (): com.sun.nio.sctp.Association
                }
                interface NotificationHandler<T> {
                    handleNotification(arg0: com.sun.nio.sctp.Notification | com.sun.nio.sctp.Notification$$Lambda, arg1: T): com.sun.nio.sctp.HandlerResult
                }
                interface NotificationHandler$$Lambda<T> {
                    (arg0: com.sun.nio.sctp.Notification | com.sun.nio.sctp.Notification$$Lambda, arg1: T): com.sun.nio.sctp.HandlerResult
                }
                abstract class PeerAddressChangeNotification implements com.sun.nio.sctp.Notification {
                    protected constructor()
                    public address(): java.net.SocketAddress
                    public association(): com.sun.nio.sctp.Association
                    public event(): com.sun.nio.sctp.PeerAddressChangeNotification$AddressChangeEvent
                    public static class: java.lang.Class<any>
                }
                abstract class PeerAddressChangeNotification$$Lambda implements com.sun.nio.sctp.Notification {
                    protected constructor()
                }
                abstract class SctpChannel extends java.nio.channels.spi.AbstractSelectableChannel {
                    protected constructor(arg0: java.nio.channels.spi.SelectorProvider)
                    public static open(): com.sun.nio.sctp.SctpChannel
                    public static open(arg0: java.net.SocketAddress, arg1: int, arg2: int): com.sun.nio.sctp.SctpChannel
                    public association(): com.sun.nio.sctp.Association
                    public bind(arg0: java.net.SocketAddress): com.sun.nio.sctp.SctpChannel
                    public bindAddress(arg0: java.net.InetAddress): com.sun.nio.sctp.SctpChannel
                    public unbindAddress(arg0: java.net.InetAddress): com.sun.nio.sctp.SctpChannel
                    public connect(arg0: java.net.SocketAddress): boolean
                    public connect(arg0: java.net.SocketAddress, arg1: int, arg2: int): boolean
                    public isConnectionPending(): boolean
                    public finishConnect(): boolean
                    public getAllLocalAddresses(): java.util.Set<java.net.SocketAddress>
                    public getRemoteAddresses(): java.util.Set<java.net.SocketAddress>
                    public shutdown(): com.sun.nio.sctp.SctpChannel
                    public getOption<T>(arg0: com.sun.nio.sctp.SctpSocketOption<T>): T
                    public setOption<T>(arg0: com.sun.nio.sctp.SctpSocketOption<T>, arg1: T): com.sun.nio.sctp.SctpChannel
                    public supportedOptions(): java.util.Set<com.sun.nio.sctp.SctpSocketOption<any>>
                    public validOps(): int
                    public receive<T>(arg0: java.nio.ByteBuffer, arg1: T, arg2: com.sun.nio.sctp.NotificationHandler<T> | com.sun.nio.sctp.NotificationHandler$$Lambda<T>): com.sun.nio.sctp.MessageInfo
                    public send(arg0: java.nio.ByteBuffer, arg1: com.sun.nio.sctp.MessageInfo): int
                    public static class: java.lang.Class<any>
                }
                abstract class SctpMultiChannel extends java.nio.channels.spi.AbstractSelectableChannel {
                    protected constructor(arg0: java.nio.channels.spi.SelectorProvider)
                    public static open(): com.sun.nio.sctp.SctpMultiChannel
                    public associations(): java.util.Set<com.sun.nio.sctp.Association>
                    public bind(arg0: java.net.SocketAddress, arg1: int): com.sun.nio.sctp.SctpMultiChannel
                    public bind(arg0: java.net.SocketAddress): com.sun.nio.sctp.SctpMultiChannel
                    public bindAddress(arg0: java.net.InetAddress): com.sun.nio.sctp.SctpMultiChannel
                    public unbindAddress(arg0: java.net.InetAddress): com.sun.nio.sctp.SctpMultiChannel
                    public getAllLocalAddresses(): java.util.Set<java.net.SocketAddress>
                    public getRemoteAddresses(arg0: com.sun.nio.sctp.Association): java.util.Set<java.net.SocketAddress>
                    public shutdown(arg0: com.sun.nio.sctp.Association): com.sun.nio.sctp.SctpMultiChannel
                    public getOption<T>(arg0: com.sun.nio.sctp.SctpSocketOption<T>, arg1: com.sun.nio.sctp.Association): T
                    public setOption<T>(arg0: com.sun.nio.sctp.SctpSocketOption<T>, arg1: T, arg2: com.sun.nio.sctp.Association): com.sun.nio.sctp.SctpMultiChannel
                    public supportedOptions(): java.util.Set<com.sun.nio.sctp.SctpSocketOption<any>>
                    public validOps(): int
                    public receive<T>(arg0: java.nio.ByteBuffer, arg1: T, arg2: com.sun.nio.sctp.NotificationHandler<T> | com.sun.nio.sctp.NotificationHandler$$Lambda<T>): com.sun.nio.sctp.MessageInfo
                    public send(arg0: java.nio.ByteBuffer, arg1: com.sun.nio.sctp.MessageInfo): int
                    public branch(arg0: com.sun.nio.sctp.Association): com.sun.nio.sctp.SctpChannel
                    public static class: java.lang.Class<any>
                }
                abstract class SctpServerChannel extends java.nio.channels.spi.AbstractSelectableChannel {
                    protected constructor(arg0: java.nio.channels.spi.SelectorProvider)
                    public static open(): com.sun.nio.sctp.SctpServerChannel
                    public accept(): com.sun.nio.sctp.SctpChannel
                    public bind(arg0: java.net.SocketAddress): com.sun.nio.sctp.SctpServerChannel
                    public bind(arg0: java.net.SocketAddress, arg1: int): com.sun.nio.sctp.SctpServerChannel
                    public bindAddress(arg0: java.net.InetAddress): com.sun.nio.sctp.SctpServerChannel
                    public unbindAddress(arg0: java.net.InetAddress): com.sun.nio.sctp.SctpServerChannel
                    public getAllLocalAddresses(): java.util.Set<java.net.SocketAddress>
                    public getOption<T>(arg0: com.sun.nio.sctp.SctpSocketOption<T>): T
                    public setOption<T>(arg0: com.sun.nio.sctp.SctpSocketOption<T>, arg1: T): com.sun.nio.sctp.SctpServerChannel
                    public supportedOptions(): java.util.Set<com.sun.nio.sctp.SctpSocketOption<any>>
                    public validOps(): int
                    public static class: java.lang.Class<any>
                }
                interface SctpSocketOption<T> extends java.net.SocketOption<T> {
                }
                class SctpStandardSocketOptions {
                    public static SCTP_DISABLE_FRAGMENTS: com.sun.nio.sctp.SctpSocketOption<java.lang.Boolean>
                    public static SCTP_EXPLICIT_COMPLETE: com.sun.nio.sctp.SctpSocketOption<java.lang.Boolean>
                    public static SCTP_FRAGMENT_INTERLEAVE: com.sun.nio.sctp.SctpSocketOption<java.lang.Integer>
                    public static SCTP_INIT_MAXSTREAMS: com.sun.nio.sctp.SctpSocketOption<com.sun.nio.sctp.SctpStandardSocketOptions$InitMaxStreams>
                    public static SCTP_NODELAY: com.sun.nio.sctp.SctpSocketOption<java.lang.Boolean>
                    public static SCTP_PRIMARY_ADDR: com.sun.nio.sctp.SctpSocketOption<java.net.SocketAddress>
                    public static SCTP_SET_PEER_PRIMARY_ADDR: com.sun.nio.sctp.SctpSocketOption<java.net.SocketAddress>
                    public static SO_SNDBUF: com.sun.nio.sctp.SctpSocketOption<java.lang.Integer>
                    public static SO_RCVBUF: com.sun.nio.sctp.SctpSocketOption<java.lang.Integer>
                    public static SO_LINGER: com.sun.nio.sctp.SctpSocketOption<java.lang.Integer>
                    public static class: java.lang.Class<any>
                }
                abstract class SendFailedNotification implements com.sun.nio.sctp.Notification {
                    protected constructor()
                    public association(): com.sun.nio.sctp.Association
                    public address(): java.net.SocketAddress
                    public buffer(): java.nio.ByteBuffer
                    public errorCode(): int
                    public streamNumber(): int
                    public static class: java.lang.Class<any>
                }
                abstract class SendFailedNotification$$Lambda implements com.sun.nio.sctp.Notification {
                    protected constructor()
                }
                abstract class ShutdownNotification implements com.sun.nio.sctp.Notification {
                    protected constructor()
                    public association(): com.sun.nio.sctp.Association
                    public static class: java.lang.Class<any>
                }
                abstract class ShutdownNotification$$Lambda implements com.sun.nio.sctp.Notification {
                    protected constructor()
                }
            }
        }
    }
}
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
                class SctpStdSocketOption<T> implements com.sun.nio.sctp.SctpSocketOption<T> {
                    public static SCTP_DISABLE_FRAGMENTS: int
                    public static SCTP_EXPLICIT_COMPLETE: int
                    public static SCTP_FRAGMENT_INTERLEAVE: int
                    public static SCTP_NODELAY: int
                    public static SO_SNDBUF: int
                    public static SO_RCVBUF: int
                    public static SO_LINGER: int
                    public constructor(arg0: java.lang.String | string, arg1: java.lang.Class<T>)
                    public constructor(arg0: java.lang.String | string, arg1: java.lang.Class<T>, arg2: int)
                    public name(): string
                    public type(): java.lang.Class<T>
                    public toString(): string
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}
