declare namespace javax {
    namespace swing {
        class JLayer<V extends java.awt.Component> extends javax.swing.JComponent implements javax.swing.Scrollable , java.beans.PropertyChangeListener , javax.accessibility.Accessible {
            public constructor()
            public constructor(arg0: V)
            public constructor(arg0: V, arg1: javax.swing.plaf.LayerUI<V>)
            public getView(): V
            public setView(arg0: V): void
            public setUI(arg0: javax.swing.plaf.LayerUI<V>): void
            public getUI(): javax.swing.plaf.LayerUI<V>
            public getGlassPane(): javax.swing.JPanel
            public setGlassPane(arg0: javax.swing.JPanel): void
            public createGlassPane(): javax.swing.JPanel
            public setLayout(arg0: java.awt.LayoutManager): void
            public setBorder(arg0: javax.swing.border.Border): void
            protected addImpl(arg0: java.awt.Component, arg1: java.lang.Object, arg2: int): void
            public remove(arg0: java.awt.Component): void
            public removeAll(): void
            protected isPaintingOrigin(): boolean
            public paintImmediately(arg0: int, arg1: int, arg2: int, arg3: int): void
            public paint(arg0: java.awt.Graphics): void
            protected paintComponent(arg0: java.awt.Graphics): void
            public isOptimizedDrawingEnabled(): boolean
            public propertyChange(arg0: java.beans.PropertyChangeEvent): void
            public setLayerEventMask(arg0: long): void
            public getLayerEventMask(): long
            public updateUI(): void
            public getPreferredScrollableViewportSize(): java.awt.Dimension
            public getScrollableBlockIncrement(arg0: java.awt.Rectangle, arg1: int, arg2: int): int
            public getScrollableTracksViewportHeight(): boolean
            public getScrollableTracksViewportWidth(): boolean
            public getScrollableUnitIncrement(arg0: java.awt.Rectangle, arg1: int, arg2: int): int
            public addNotify(): void
            public removeNotify(): void
            public doLayout(): void
            public getAccessibleContext(): javax.accessibility.AccessibleContext
            public static class: java.lang.Class<any>
        }
    }
}