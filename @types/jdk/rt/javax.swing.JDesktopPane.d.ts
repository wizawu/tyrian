declare namespace javax {
    namespace swing {
        class JDesktopPane extends javax.swing.JLayeredPane implements javax.accessibility.Accessible {
            public static readonly LIVE_DRAG_MODE: int
            public static readonly OUTLINE_DRAG_MODE: int
            public constructor()
            public getUI(): javax.swing.plaf.DesktopPaneUI
            public setUI(arg0: javax.swing.plaf.DesktopPaneUI): void
            public setDragMode(arg0: int): void
            public getDragMode(): int
            public getDesktopManager(): javax.swing.DesktopManager
            public setDesktopManager(arg0: javax.swing.DesktopManager): void
            public updateUI(): void
            public getUIClassID(): string
            public getAllFrames(): javax.swing.JInternalFrame[]
            public getSelectedFrame(): javax.swing.JInternalFrame
            public setSelectedFrame(arg0: javax.swing.JInternalFrame): void
            public getAllFramesInLayer(arg0: int): javax.swing.JInternalFrame[]
            public remove(arg0: java.awt.Component): void
            public selectFrame(arg0: boolean): javax.swing.JInternalFrame
            protected addImpl(arg0: java.awt.Component, arg1: java.lang.Object, arg2: int): void
            public remove(arg0: int): void
            public removeAll(): void
            public setComponentZOrder(arg0: java.awt.Component, arg1: int): void
            protected paramString(): string
            public getAccessibleContext(): javax.accessibility.AccessibleContext
            public static class: java.lang.Class<any>
        }
    }
}