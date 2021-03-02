declare namespace javax {
  namespace swing {
    namespace text {
      namespace html {

        class ImageView extends javax.swing.text.View {
          public constructor(arg0: javax.swing.text.Element)
          public getAltText(): java.lang.String
          public getImageURL(): java.net.URL
          public getNoImageIcon(): javax.swing.Icon
          public getLoadingImageIcon(): javax.swing.Icon
          public getImage(): java.awt.Image
          public setLoadsSynchronously(arg0: boolean | java.lang.Boolean): void
          public getLoadsSynchronously(): boolean
          protected getStyleSheet(): javax.swing.text.html.StyleSheet
          public getAttributes(): javax.swing.text.AttributeSet
          public getToolTipText(arg0: number | java.lang.Float, arg1: number | java.lang.Float, arg2: java.awt.Shape): java.lang.String
          protected setPropertiesFromAttributes(): void
          public setParent(arg0: javax.swing.text.View): void
          public changedUpdate(arg0: javax.swing.event.DocumentEvent, arg1: java.awt.Shape, arg2: javax.swing.text.ViewFactory | javax.swing.text.ViewFactory$$lambda): void
          public paint(arg0: java.awt.Graphics, arg1: java.awt.Shape): void
          public getPreferredSpan(arg0: number | java.lang.Integer): number
          public getAlignment(arg0: number | java.lang.Integer): number
          public modelToView(arg0: number | java.lang.Integer, arg1: java.awt.Shape, arg2: javax.swing.text.Position$Bias): java.awt.Shape
          public viewToModel(arg0: number | java.lang.Float, arg1: number | java.lang.Float, arg2: java.awt.Shape, arg3: javax.swing.text.Position$Bias[]): number
          public setSize(arg0: number | java.lang.Float, arg1: number | java.lang.Float): void
        }

      }
    }
  }
}
