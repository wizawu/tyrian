declare namespace javax {
  namespace swing {
    namespace colorchooser {

      abstract class AbstractColorChooserPanel extends javax.swing.JPanel {
        public static readonly TRANSPARENCY_ENABLED_PROPERTY: java.lang.String
        public constructor()
        public abstract updateChooser(): void
        protected abstract buildChooser(): void
        public abstract getDisplayName(): java.lang.String
        public getMnemonic(): number
        public getDisplayedMnemonicIndex(): number
        public abstract getSmallDisplayIcon(): javax.swing.Icon
        public abstract getLargeDisplayIcon(): javax.swing.Icon
        public installChooserPanel(arg0: javax.swing.JColorChooser): void
        public uninstallChooserPanel(arg0: javax.swing.JColorChooser): void
        public getColorSelectionModel(): javax.swing.colorchooser.ColorSelectionModel
        protected getColorFromModel(): java.awt.Color
        setSelectedColor(arg0: java.awt.Color): void
        public setColorTransparencySelectionEnabled(arg0: boolean | java.lang.Boolean): void
        public isColorTransparencySelectionEnabled(): boolean
        public paint(arg0: java.awt.Graphics): void
        getInt(arg0: java.lang.Object | any, arg1: number | java.lang.Integer): number
      }

    }
  }
}
