declare namespace javax {
    namespace swing {
        namespace colorchooser {
abstract class AbstractColorChooserPanel extends javax.swing.JPanel {
    public constructor()
    public updateChooser(): void
    protected buildChooser(): void
    public getDisplayName(): string
    public getMnemonic(): int
    public getDisplayedMnemonicIndex(): int
    public getSmallDisplayIcon(): javax.swing.Icon
    public getLargeDisplayIcon(): javax.swing.Icon
    public installChooserPanel(arg0: javax.swing.JColorChooser | javax.swing.JColorChooser$$Lambda): void
    public uninstallChooserPanel(arg0: javax.swing.JColorChooser | javax.swing.JColorChooser$$Lambda): void
    public getColorSelectionModel(): javax.swing.colorchooser.ColorSelectionModel
    protected getColorFromModel(): java.awt.Color
    public paint(arg0: java.awt.Graphics): void
    public static class: java.lang.Class<any>
}

        }
    }
}