declare namespace javax {
    namespace swing {
        class JScrollBar extends javax.swing.JComponent implements java.awt.Adjustable , javax.accessibility.Accessible {
            protected model: javax.swing.BoundedRangeModel
            protected orientation: int
            protected unitIncrement: int
            protected blockIncrement: int
            public constructor(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int)
            public constructor(arg0: int)
            public constructor()
            public setUI(arg0: javax.swing.plaf.ScrollBarUI): void
            public getUI(): javax.swing.plaf.ScrollBarUI
            public updateUI(): void
            public getUIClassID(): string
            public getOrientation(): int
            public setOrientation(arg0: int): void
            public getModel(): javax.swing.BoundedRangeModel
            public setModel(arg0: javax.swing.BoundedRangeModel): void
            public getUnitIncrement(arg0: int): int
            public setUnitIncrement(arg0: int): void
            public getBlockIncrement(arg0: int): int
            public setBlockIncrement(arg0: int): void
            public getUnitIncrement(): int
            public getBlockIncrement(): int
            public getValue(): int
            public setValue(arg0: int): void
            public getVisibleAmount(): int
            public setVisibleAmount(arg0: int): void
            public getMinimum(): int
            public setMinimum(arg0: int): void
            public getMaximum(): int
            public setMaximum(arg0: int): void
            public getValueIsAdjusting(): boolean
            public setValueIsAdjusting(arg0: boolean): void
            public setValues(arg0: int, arg1: int, arg2: int, arg3: int): void
            public addAdjustmentListener(arg0: java.awt.event.AdjustmentListener): void
            public removeAdjustmentListener(arg0: java.awt.event.AdjustmentListener): void
            public getAdjustmentListeners(): java.awt.event.AdjustmentListener[]
            protected fireAdjustmentValueChanged(arg0: int, arg1: int, arg2: int): void
            public getMinimumSize(): java.awt.Dimension
            public getMaximumSize(): java.awt.Dimension
            public setEnabled(arg0: boolean): void
            protected paramString(): string
            public getAccessibleContext(): javax.accessibility.AccessibleContext
            public static class: java.lang.Class<any>
        }
        class JScrollBar$$Lambda extends javax.swing.JComponent implements java.awt.Adjustable , javax.accessibility.Accessible {
            protected model: javax.swing.BoundedRangeModel
        }
    }
}