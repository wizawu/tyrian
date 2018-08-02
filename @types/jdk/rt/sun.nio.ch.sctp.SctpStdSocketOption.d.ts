declare namespace sun {
    namespace nio {
        namespace ch {
            namespace sctp {
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