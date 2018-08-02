declare namespace java {
    namespace awt {
        namespace peer {
            interface TextAreaPeer extends java.awt.peer.TextComponentPeer {
                insert(arg0: java.lang.String | string, arg1: int): void
                replaceRange(arg0: java.lang.String | string, arg1: int, arg2: int): void
                getPreferredSize(arg0: int, arg1: int): java.awt.Dimension
                getMinimumSize(arg0: int, arg1: int): java.awt.Dimension
            }
        }
    }
}