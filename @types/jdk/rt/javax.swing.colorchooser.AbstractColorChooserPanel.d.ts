declare namespace javax {
    namespace swing {
        namespace colorchooser {
            abstract class AbstractColorChooserPanel extends javax.swing.JPanel {
                public constructor()
                public abstract updateChooser(): void
                protected abstract buildChooser(): void
                public abstract getDisplayName(): string
                public getMnemonic(): int
                public getDisplayedMnemonicIndex(): int
                public abstract getSmallDisplayIcon(): javax.swing.Icon
                public abstract getLargeDisplayIcon(): javax.swing.Icon
                public installChooserPanel(arg0: javax.swing.JColorChooser): void
                public uninstallChooserPanel(arg0: javax.swing.JColorChooser): void
                public getColorSelectionModel(): javax.swing.colorchooser.ColorSelectionModel
                protected getColorFromModel(): java.awt.Color
                public paint(arg0: java.awt.Graphics): void
                public static class: java.lang.Class<any>
            }
        }
    }
}