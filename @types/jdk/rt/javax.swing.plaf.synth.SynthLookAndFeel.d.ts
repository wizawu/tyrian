declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace synth {
                class SynthLookAndFeel extends javax.swing.plaf.basic.BasicLookAndFeel {
                    public static setStyleFactory(arg0: javax.swing.plaf.synth.SynthStyleFactory): void
                    public static getStyleFactory(): javax.swing.plaf.synth.SynthStyleFactory
                    public static getStyle(arg0: javax.swing.JComponent, arg1: javax.swing.plaf.synth.Region): javax.swing.plaf.synth.SynthStyle
                    public static updateStyles(arg0: java.awt.Component): void
                    public static getRegion(arg0: javax.swing.JComponent): javax.swing.plaf.synth.Region
                    public static createUI(arg0: javax.swing.JComponent): javax.swing.plaf.ComponentUI
                    public constructor()
                    public load(arg0: java.io.InputStream, arg1: java.lang.Class<any>): void
                    public load(arg0: java.net.URL): void
                    public initialize(): void
                    public uninitialize(): void
                    public getDefaults(): javax.swing.UIDefaults
                    public isSupportedLookAndFeel(): boolean
                    public isNativeLookAndFeel(): boolean
                    public getDescription(): string
                    public getName(): string
                    public getID(): string
                    public shouldUpdateStyleOnAncestorChanged(): boolean
                    protected shouldUpdateStyleOnEvent(arg0: java.beans.PropertyChangeEvent): boolean
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}