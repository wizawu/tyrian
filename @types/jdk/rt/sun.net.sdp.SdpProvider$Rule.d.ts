declare namespace sun {
    namespace net {
        namespace sdp {
            interface SdpProvider$Rule {
                match(arg0: sun.net.sdp.SdpProvider$Action, arg1: java.net.InetAddress, arg2: int): boolean
            }
            interface SdpProvider$Rule$$Lambda {
                (arg0: sun.net.sdp.SdpProvider$Action, arg1: java.net.InetAddress, arg2: int): boolean
            }
        }
    }
}