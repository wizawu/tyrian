declare namespace javax {
    namespace swing {
        namespace text {
            namespace html {
                class ImageView extends javax.swing.text.View {
                    public constructor(arg0: javax.swing.text.Element)
                    public getAltText(): string
                    public getImageURL(): java.net.URL
                    public getNoImageIcon(): javax.swing.Icon
                    public getLoadingImageIcon(): javax.swing.Icon
                    public getImage(): java.awt.Image
                    public setLoadsSynchronously(arg0: boolean): void
                    public getLoadsSynchronously(): boolean
                    protected getStyleSheet(): javax.swing.text.html.StyleSheet
                    public getAttributes(): javax.swing.text.AttributeSet
                    public getToolTipText(arg0: float, arg1: float, arg2: java.awt.Shape): string
                    protected setPropertiesFromAttributes(): void
                    public setParent(arg0: javax.swing.text.View): void
                    public changedUpdate(arg0: javax.swing.event.DocumentEvent, arg1: java.awt.Shape, arg2: javax.swing.text.ViewFactory | javax.swing.text.ViewFactory$$Lambda): void
                    public paint(arg0: java.awt.Graphics, arg1: java.awt.Shape): void
                    public getPreferredSpan(arg0: int): float
                    public getAlignment(arg0: int): float
                    public modelToView(arg0: int, arg1: java.awt.Shape, arg2: javax.swing.text.Position$Bias): java.awt.Shape
                    public viewToModel(arg0: float, arg1: float, arg2: java.awt.Shape, arg3: javax.swing.text.Position$Bias[]): int
                    public setSize(arg0: float, arg1: float): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}