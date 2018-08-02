declare namespace javax {
    namespace swing {
        namespace colorchooser {
            class SwatchPanel extends javax.swing.JPanel {
                protected colors: java.awt.Color[]
                protected swatchSize: java.awt.Dimension
                protected numSwatches: java.awt.Dimension
                protected gap: java.awt.Dimension
                public constructor()
                public getSelectedColor(): java.awt.Color
                protected initValues(): void
                public paintComponent(arg0: java.awt.Graphics): void
                public getPreferredSize(): java.awt.Dimension
                protected initColors(): void
                public getToolTipText(arg0: java.awt.event.MouseEvent): string
                public setSelectedColorFromLocation(arg0: int, arg1: int): void
                public getColorForLocation(arg0: int, arg1: int): java.awt.Color
                public static class: java.lang.Class<any>
            }
        }
    }
}