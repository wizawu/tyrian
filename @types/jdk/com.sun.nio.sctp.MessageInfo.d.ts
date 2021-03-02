declare namespace com {
  namespace sun {
    namespace nio {
      namespace sctp {

        abstract class MessageInfo {
          protected constructor()
          public static createOutgoing(arg0: java.net.SocketAddress, arg1: number | java.lang.Integer): com.sun.nio.sctp.MessageInfo
          public static createOutgoing(arg0: com.sun.nio.sctp.Association, arg1: java.net.SocketAddress, arg2: number | java.lang.Integer): com.sun.nio.sctp.MessageInfo
          public abstract address(): java.net.SocketAddress
          public abstract association(): com.sun.nio.sctp.Association
          public abstract bytes(): number
          public abstract isComplete(): boolean
          public abstract complete(arg0: boolean | java.lang.Boolean): com.sun.nio.sctp.MessageInfo
          public abstract isUnordered(): boolean
          public abstract unordered(arg0: boolean | java.lang.Boolean): com.sun.nio.sctp.MessageInfo
          public abstract payloadProtocolID(): number
          public abstract payloadProtocolID(arg0: number | java.lang.Integer): com.sun.nio.sctp.MessageInfo
          public abstract streamNumber(): number
          public abstract streamNumber(arg0: number | java.lang.Integer): com.sun.nio.sctp.MessageInfo
          public abstract timeToLive(): number
          public abstract timeToLive(arg0: number | java.lang.Long): com.sun.nio.sctp.MessageInfo
        }

      }
    }
  }
}
