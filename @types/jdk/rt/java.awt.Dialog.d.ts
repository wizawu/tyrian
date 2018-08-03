declare namespace java {
    namespace awt {
        class Dialog extends java.awt.Window {
            public static DEFAULT_MODALITY_TYPE: java.awt.Dialog$ModalityType
            public constructor(arg0: java.awt.Frame)
            public constructor(arg0: java.awt.Frame, arg1: boolean)
            public constructor(arg0: java.awt.Frame, arg1: java.lang.String | string)
            public constructor(arg0: java.awt.Frame, arg1: java.lang.String | string, arg2: boolean)
            public constructor(arg0: java.awt.Frame, arg1: java.lang.String | string, arg2: boolean, arg3: java.awt.GraphicsConfiguration)
            public constructor(arg0: java.awt.Dialog)
            public constructor(arg0: java.awt.Dialog, arg1: java.lang.String | string)
            public constructor(arg0: java.awt.Dialog, arg1: java.lang.String | string, arg2: boolean)
            public constructor(arg0: java.awt.Dialog, arg1: java.lang.String | string, arg2: boolean, arg3: java.awt.GraphicsConfiguration)
            public constructor(arg0: java.awt.Window)
            public constructor(arg0: java.awt.Window, arg1: java.lang.String | string)
            public constructor(arg0: java.awt.Window, arg1: java.awt.Dialog$ModalityType)
            public constructor(arg0: java.awt.Window, arg1: java.lang.String | string, arg2: java.awt.Dialog$ModalityType)
            public constructor(arg0: java.awt.Window, arg1: java.lang.String | string, arg2: java.awt.Dialog$ModalityType, arg3: java.awt.GraphicsConfiguration)
            public addNotify(): void
            public isModal(): boolean
            public setModal(arg0: boolean): void
            public getModalityType(): java.awt.Dialog$ModalityType
            public setModalityType(arg0: java.awt.Dialog$ModalityType): void
            public getTitle(): string
            public setTitle(arg0: java.lang.String | string): void
            public setVisible(arg0: boolean): void
            public show(): void
            public hide(): void
            public toBack(): void
            public isResizable(): boolean
            public setResizable(arg0: boolean): void
            public setUndecorated(arg0: boolean): void
            public isUndecorated(): boolean
            public setOpacity(arg0: float): void
            public setShape(arg0: java.awt.Shape): void
            public setBackground(arg0: java.awt.Color): void
            protected paramString(): string
            public getAccessibleContext(): javax.accessibility.AccessibleContext
            public static class: java.lang.Class<any>
        }
    }
}