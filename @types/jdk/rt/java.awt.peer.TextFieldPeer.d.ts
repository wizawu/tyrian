declare namespace java {
    namespace awt {
        namespace peer {
            interface TextFieldPeer extends java.awt.peer.TextComponentPeer {
                setEchoChar(arg0: char): void
                getPreferredSize(arg0: int): java.awt.Dimension
                getMinimumSize(arg0: int): java.awt.Dimension
            }
        }
    }
}