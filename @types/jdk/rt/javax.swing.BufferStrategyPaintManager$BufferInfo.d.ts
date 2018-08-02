declare namespace javax {
    namespace swing {
        class BufferStrategyPaintManager$BufferInfo extends java.awt.event.ComponentAdapter implements java.awt.event.WindowListener {
            public constructor(arg0: javax.swing.BufferStrategyPaintManager, arg1: java.awt.Container)
            public setPaintAllOnExpose(arg0: boolean): void
            public getPaintAllOnExpose(): boolean
            public setContentsLostDuringExpose(arg0: boolean): void
            public getContentsLostDuringExpose(): boolean
            public setInSync(arg0: boolean): void
            public isInSync(): boolean
            public getRoot(): java.awt.Container
            public getBufferStrategy(arg0: boolean): java.awt.image.BufferStrategy
            public hasBufferStrategyChanged(): boolean
            public dispose(): void
            public componentHidden(arg0: java.awt.event.ComponentEvent): void
            public windowIconified(arg0: java.awt.event.WindowEvent): void
            public windowClosed(arg0: java.awt.event.WindowEvent): void
            public windowOpened(arg0: java.awt.event.WindowEvent): void
            public windowClosing(arg0: java.awt.event.WindowEvent): void
            public windowDeiconified(arg0: java.awt.event.WindowEvent): void
            public windowActivated(arg0: java.awt.event.WindowEvent): void
            public windowDeactivated(arg0: java.awt.event.WindowEvent): void
            public static class: java.lang.Class<any>
        }
    }
}