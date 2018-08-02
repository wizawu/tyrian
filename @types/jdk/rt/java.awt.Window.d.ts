declare namespace java {
    namespace awt {
        class Window extends java.awt.Container implements javax.accessibility.Accessible {
            public constructor(arg0: java.awt.Frame)
            public constructor(arg0: java.awt.Window | java.awt.Window$$Lambda)
            public constructor(arg0: java.awt.Window | java.awt.Window$$Lambda, arg1: java.awt.GraphicsConfiguration)
            public getIconImages(): java.util.List<java.awt.Image>
            public setIconImages(arg0: java.util.List<java.awt.Image>): void
            public setIconImage(arg0: java.awt.Image): void
            public addNotify(): void
            public removeNotify(): void
            public pack(): void
            public setMinimumSize(arg0: java.awt.Dimension): void
            public setSize(arg0: java.awt.Dimension): void
            public setSize(arg0: int, arg1: int): void
            public setLocation(arg0: int, arg1: int): void
            public setLocation(arg0: java.awt.Point): void
            public reshape(arg0: int, arg1: int, arg2: int, arg3: int): void
            public setVisible(arg0: boolean): void
            public show(): void
            public hide(): void
            public dispose(): void
            public toFront(): void
            public toBack(): void
            public getToolkit(): java.awt.Toolkit
            public getWarningString(): string
            public getLocale(): java.util.Locale
            public getInputContext(): java.awt.im.InputContext
            public setCursor(arg0: java.awt.Cursor): void
            public getOwner(): java.awt.Window
            public getOwnedWindows(): java.awt.Window[]
            public static getWindows(): java.awt.Window[]
            public static getOwnerlessWindows(): java.awt.Window[]
            public setModalExclusionType(arg0: java.awt.Dialog$ModalExclusionType): void
            public getModalExclusionType(): java.awt.Dialog$ModalExclusionType
            public addWindowListener(arg0: java.awt.event.WindowListener): void
            public addWindowStateListener(arg0: java.awt.event.WindowStateListener): void
            public addWindowFocusListener(arg0: java.awt.event.WindowFocusListener): void
            public removeWindowListener(arg0: java.awt.event.WindowListener): void
            public removeWindowStateListener(arg0: java.awt.event.WindowStateListener): void
            public removeWindowFocusListener(arg0: java.awt.event.WindowFocusListener): void
            public getWindowListeners(): java.awt.event.WindowListener[]
            public getWindowFocusListeners(): java.awt.event.WindowFocusListener[]
            public getWindowStateListeners(): java.awt.event.WindowStateListener[]
            public getListeners<T extends java.util.EventListener>(arg0: java.lang.Class<T>): T[]
            protected processEvent<T extends java.util.EventListener>(arg0: java.awt.AWTEvent): void
            protected processWindowEvent<T extends java.util.EventListener>(arg0: java.awt.event.WindowEvent): void
            protected processWindowFocusEvent<T extends java.util.EventListener>(arg0: java.awt.event.WindowEvent): void
            protected processWindowStateEvent<T extends java.util.EventListener>(arg0: java.awt.event.WindowEvent): void
            public setAlwaysOnTop<T extends java.util.EventListener>(arg0: boolean): void
            public isAlwaysOnTopSupported<T extends java.util.EventListener>(): boolean
            public isAlwaysOnTop<T extends java.util.EventListener>(): boolean
            public getFocusOwner<T extends java.util.EventListener>(): java.awt.Component
            public getMostRecentFocusOwner<T extends java.util.EventListener>(): java.awt.Component
            public isActive<T extends java.util.EventListener>(): boolean
            public isFocused<T extends java.util.EventListener>(): boolean
            public getFocusTraversalKeys<T extends java.util.EventListener>(arg0: int): java.util.Set<java.awt.AWTKeyStroke>
            public setFocusCycleRoot<T extends java.util.EventListener>(arg0: boolean): void
            public isFocusCycleRoot<T extends java.util.EventListener>(): boolean
            public getFocusCycleRootAncestor<T extends java.util.EventListener>(): java.awt.Container
            public isFocusableWindow<T extends java.util.EventListener>(): boolean
            public getFocusableWindowState<T extends java.util.EventListener>(): boolean
            public setFocusableWindowState<T extends java.util.EventListener>(arg0: boolean): void
            public setAutoRequestFocus<T extends java.util.EventListener>(arg0: boolean): void
            public isAutoRequestFocus<T extends java.util.EventListener>(): boolean
            public addPropertyChangeListener<T extends java.util.EventListener>(arg0: java.beans.PropertyChangeListener): void
            public addPropertyChangeListener<T extends java.util.EventListener>(arg0: java.lang.String | string, arg1: java.beans.PropertyChangeListener): void
            public isValidateRoot<T extends java.util.EventListener>(): boolean
            public postEvent<T extends java.util.EventListener>(arg0: java.awt.Event): boolean
            public isShowing<T extends java.util.EventListener>(): boolean
            public applyResourceBundle<T extends java.util.EventListener>(arg0: java.util.ResourceBundle): void
            public applyResourceBundle<T extends java.util.EventListener>(arg0: java.lang.String | string): void
            public setType<T extends java.util.EventListener>(arg0: java.awt.Window$Type): void
            public getType<T extends java.util.EventListener>(): java.awt.Window$Type
            public getAccessibleContext<T extends java.util.EventListener>(): javax.accessibility.AccessibleContext
            public setLocationRelativeTo<T extends java.util.EventListener>(arg0: java.awt.Component): void
            public createBufferStrategy<T extends java.util.EventListener>(arg0: int): void
            public createBufferStrategy<T extends java.util.EventListener>(arg0: int, arg1: java.awt.BufferCapabilities): void
            public getBufferStrategy<T extends java.util.EventListener>(): java.awt.image.BufferStrategy
            public setLocationByPlatform<T extends java.util.EventListener>(arg0: boolean): void
            public isLocationByPlatform<T extends java.util.EventListener>(): boolean
            public setBounds<T extends java.util.EventListener>(arg0: int, arg1: int, arg2: int, arg3: int): void
            public setBounds<T extends java.util.EventListener>(arg0: java.awt.Rectangle): void
            public getOpacity<T extends java.util.EventListener>(): float
            public setOpacity<T extends java.util.EventListener>(arg0: float): void
            public getShape<T extends java.util.EventListener>(): java.awt.Shape
            public setShape<T extends java.util.EventListener>(arg0: java.awt.Shape): void
            public getBackground<T extends java.util.EventListener>(): java.awt.Color
            public setBackground<T extends java.util.EventListener>(arg0: java.awt.Color): void
            public isOpaque<T extends java.util.EventListener>(): boolean
            public paint<T extends java.util.EventListener>(arg0: java.awt.Graphics): void
            public static class: java.lang.Class<any>
        }
        class Window$$Lambda extends java.awt.Container implements javax.accessibility.Accessible {
            public constructor(arg0: java.awt.Frame)
        }
    }
}