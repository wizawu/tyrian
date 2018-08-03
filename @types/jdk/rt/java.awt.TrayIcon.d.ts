declare namespace java {
    namespace awt {
        class TrayIcon {
            public constructor(arg0: java.awt.Image)
            public constructor(arg0: java.awt.Image, arg1: java.lang.String | string)
            public constructor(arg0: java.awt.Image, arg1: java.lang.String | string, arg2: java.awt.PopupMenu)
            public setImage(arg0: java.awt.Image): void
            public getImage(): java.awt.Image
            public setPopupMenu(arg0: java.awt.PopupMenu): void
            public getPopupMenu(): java.awt.PopupMenu
            public setToolTip(arg0: java.lang.String | string): void
            public getToolTip(): string
            public setImageAutoSize(arg0: boolean): void
            public isImageAutoSize(): boolean
            public addMouseListener(arg0: java.awt.event.MouseListener): void
            public removeMouseListener(arg0: java.awt.event.MouseListener): void
            public getMouseListeners(): java.awt.event.MouseListener[]
            public addMouseMotionListener(arg0: java.awt.event.MouseMotionListener): void
            public removeMouseMotionListener(arg0: java.awt.event.MouseMotionListener): void
            public getMouseMotionListeners(): java.awt.event.MouseMotionListener[]
            public getActionCommand(): string
            public setActionCommand(arg0: java.lang.String | string): void
            public addActionListener(arg0: java.awt.event.ActionListener | java.awt.event.ActionListener$$Lambda): void
            public removeActionListener(arg0: java.awt.event.ActionListener | java.awt.event.ActionListener$$Lambda): void
            public getActionListeners(): java.awt.event.ActionListener[]
            public displayMessage(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.awt.TrayIcon$MessageType): void
            public getSize(): java.awt.Dimension
            public static class: java.lang.Class<any>
        }
    }
}