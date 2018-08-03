declare namespace javax {
    namespace swing {
        class JLayeredPane extends javax.swing.JComponent implements javax.accessibility.Accessible {
            public static readonly DEFAULT_LAYER: java.lang.Integer
            public static readonly PALETTE_LAYER: java.lang.Integer
            public static readonly MODAL_LAYER: java.lang.Integer
            public static readonly POPUP_LAYER: java.lang.Integer
            public static readonly DRAG_LAYER: java.lang.Integer
            public static readonly FRAME_CONTENT_LAYER: java.lang.Integer
            public static readonly LAYER_PROPERTY: string
            public constructor()
            protected addImpl(arg0: java.awt.Component, arg1: java.lang.Object, arg2: int): void
            public remove(arg0: int): void
            public removeAll(): void
            public isOptimizedDrawingEnabled(): boolean
            public static putLayer(arg0: javax.swing.JComponent, arg1: int): void
            public static getLayer(arg0: javax.swing.JComponent): int
            public static getLayeredPaneAbove(arg0: java.awt.Component): javax.swing.JLayeredPane
            public setLayer(arg0: java.awt.Component, arg1: int): void
            public setLayer(arg0: java.awt.Component, arg1: int, arg2: int): void
            public getLayer(arg0: java.awt.Component): int
            public getIndexOf(arg0: java.awt.Component): int
            public moveToFront(arg0: java.awt.Component): void
            public moveToBack(arg0: java.awt.Component): void
            public setPosition(arg0: java.awt.Component, arg1: int): void
            public getPosition(arg0: java.awt.Component): int
            public highestLayer(): int
            public lowestLayer(): int
            public getComponentCountInLayer(arg0: int): int
            public getComponentsInLayer(arg0: int): java.awt.Component[]
            public paint(arg0: java.awt.Graphics): void
            protected getComponentToLayer(): java.util.Hashtable<java.awt.Component, java.lang.Integer>
            protected getObjectForLayer(arg0: int): java.lang.Integer
            protected insertIndexForLayer(arg0: int, arg1: int): int
            protected paramString(): string
            public getAccessibleContext(): javax.accessibility.AccessibleContext
            public static class: java.lang.Class<any>
        }
    }
}