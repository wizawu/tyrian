declare namespace sun {
    namespace nio {
        namespace ch {
            namespace sctp {
                class SctpStdSocketOption<T> implements com.sun.nio.sctp.SctpSocketOption<T> {
                    public static readonly SCTP_DISABLE_FRAGMENTS: int
                    public static readonly SCTP_EXPLICIT_COMPLETE: int
                    public static readonly SCTP_FRAGMENT_INTERLEAVE: int
                    public static readonly SCTP_NODELAY: int
                    public static readonly SO_SNDBUF: int
                    public static readonly SO_RCVBUF: int
                    public static readonly SO_LINGER: int
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