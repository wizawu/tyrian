declare namespace java {
    namespace awt {
        namespace peer {
interface TextComponentPeer extends java.awt.peer.ComponentPeer {
    setEditable(arg0: boolean): void
    getText(): string
    setText(arg0: java.lang.String | string): void
    getSelectionStart(): int
    getSelectionEnd(): int
    select(arg0: int, arg1: int): void
    setCaretPosition(arg0: int): void
    getCaretPosition(): int
    getInputMethodRequests(): java.awt.im.InputMethodRequests
}

        }
    }
}