declare namespace java {
    namespace awt {
        namespace peer {
interface FileDialogPeer extends java.awt.peer.DialogPeer {
    setFile(arg0: java.lang.String | string): void
    setDirectory(arg0: java.lang.String | string): void
    setFilenameFilter(arg0: java.io.FilenameFilter | java.io.FilenameFilter$$Lambda): void
}

        }
    }
}