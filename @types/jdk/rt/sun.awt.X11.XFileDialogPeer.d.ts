declare namespace sun {
    namespace awt {
        namespace X11 {
            class XFileDialogPeer extends sun.awt.X11.XDialogPeer implements java.awt.peer.FileDialogPeer , java.awt.event.ActionListener , java.awt.event.ItemListener , java.awt.KeyEventDispatcher , sun.awt.X11.XChoicePeerListener {
                public updateMinimumSize(): void
                public updateIconImages(): void
                public itemStateChanged(arg0: java.awt.event.ItemEvent): void
                public actionPerformed(arg0: java.awt.event.ActionEvent): void
                public dispatchKeyEvent(arg0: java.awt.event.KeyEvent): boolean
                public setFile(arg0: java.lang.String | string): void
                public setDirectory(arg0: java.lang.String | string): void
                public setFilenameFilter(arg0: java.io.FilenameFilter | java.io.FilenameFilter$$Lambda): void
                public dispose(): void
                public setVisible(arg0: boolean): void
                public addItemsToPathChoice(arg0: java.lang.String | string): void
                public unfurledChoiceOpening(arg0: sun.awt.X11.ListHelper): void
                public unfurledChoiceClosing(): void
                public static class: java.lang.Class<any>
            }
        }
    }
}