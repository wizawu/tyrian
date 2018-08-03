declare namespace javax {
    namespace swing {
        class JProgressBar extends javax.swing.JComponent implements javax.swing.SwingConstants , javax.accessibility.Accessible {
            protected orientation: int
            protected paintBorder: boolean
            protected model: javax.swing.BoundedRangeModel
            protected progressString: string
            protected paintString: boolean
            protected changeEvent: javax.swing.event.ChangeEvent
            protected changeListener: javax.swing.event.ChangeListener
            public constructor()
            public constructor(arg0: int)
            public constructor(arg0: int, arg1: int)
            public constructor(arg0: int, arg1: int, arg2: int)
            public constructor(arg0: javax.swing.BoundedRangeModel)
            public getOrientation(): int
            public setOrientation(arg0: int): void
            public isStringPainted(): boolean
            public setStringPainted(arg0: boolean): void
            public getString(): string
            public setString(arg0: java.lang.String | string): void
            public getPercentComplete(): double
            public isBorderPainted(): boolean
            public setBorderPainted(arg0: boolean): void
            protected paintBorder(arg0: java.awt.Graphics): void
            public getUI(): javax.swing.plaf.ProgressBarUI
            public setUI(arg0: javax.swing.plaf.ProgressBarUI): void
            public updateUI(): void
            public getUIClassID(): string
            protected createChangeListener(): javax.swing.event.ChangeListener
            public addChangeListener(arg0: javax.swing.event.ChangeListener | javax.swing.event.ChangeListener$$Lambda): void
            public removeChangeListener(arg0: javax.swing.event.ChangeListener | javax.swing.event.ChangeListener$$Lambda): void
            public getChangeListeners(): javax.swing.event.ChangeListener[]
            protected fireStateChanged(): void
            public getModel(): javax.swing.BoundedRangeModel
            public setModel(arg0: javax.swing.BoundedRangeModel): void
            public getValue(): int
            public getMinimum(): int
            public getMaximum(): int
            public setValue(arg0: int): void
            public setMinimum(arg0: int): void
            public setMaximum(arg0: int): void
            public setIndeterminate(arg0: boolean): void
            public isIndeterminate(): boolean
            protected paramString(): string
            public getAccessibleContext(): javax.accessibility.AccessibleContext
            public static class: java.lang.Class<any>
        }
    }
}