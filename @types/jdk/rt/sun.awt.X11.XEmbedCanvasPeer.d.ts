declare namespace sun {
    namespace awt {
        namespace X11 {
            class XEmbedCanvasPeer extends sun.awt.X11.XCanvasPeer implements java.awt.event.WindowFocusListener , java.awt.KeyEventPostProcessor , sun.awt.ModalityListener , sun.awt.WindowIDProvider {
                protected postInit(arg0: sun.awt.X11.XCreateWindowParams): void
                protected preInit(arg0: sun.awt.X11.XCreateWindowParams): void
                public handleEvent(arg0: java.awt.AWTEvent): void
                public dispatchEvent(arg0: sun.awt.X11.XEvent): void
                public getPreferredSize(): java.awt.Dimension
                public getMinimumSize(): java.awt.Dimension
                public dispose(): void
                public isFocusable(): boolean
                public windowGainedFocus(arg0: java.awt.event.WindowEvent): void
                public windowLostFocus(arg0: java.awt.event.WindowEvent): void
                public postProcessKeyEvent(arg0: java.awt.event.KeyEvent): boolean
                public modalityPushed(arg0: sun.awt.ModalityEvent | sun.awt.ModalityEvent$$Lambda): void
                public modalityPopped(arg0: sun.awt.ModalityEvent | sun.awt.ModalityEvent$$Lambda): void
                public handleClientMessage(arg0: sun.awt.X11.XEvent): void
                public setXEmbedDropTarget(): void
                public removeXEmbedDropTarget(): void
                public processXEmbedDnDEvent(arg0: long, arg1: int): boolean
                public disableBackgroundErase(): void
                public getAppropriateGraphicsConfiguration(arg0: java.awt.GraphicsConfiguration): java.awt.GraphicsConfiguration
                public static class: java.lang.Class<any>
            }
            class XEmbedCanvasPeer$$Lambda extends sun.awt.X11.XCanvasPeer implements java.awt.event.WindowFocusListener , java.awt.KeyEventPostProcessor , sun.awt.ModalityListener , sun.awt.WindowIDProvider {
                protected (arg0: sun.awt.X11.XCreateWindowParams): void
            }
        }
    }
}