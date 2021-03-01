declare namespace javax {
  namespace swing {

    class JTextPane extends javax.swing.JEditorPane {

      public constructor()
      public constructor(arg0: javax.swing.text.StyledDocument)
      public getUIClassID(): java.lang.String
      public setDocument(arg0: javax.swing.text.Document): void
      public setStyledDocument(arg0: javax.swing.text.StyledDocument): void
      public getStyledDocument(): javax.swing.text.StyledDocument
      public replaceSelection(arg0: java.lang.String): void
      public insertComponent(arg0: java.awt.Component): void
      public insertIcon(arg0: javax.swing.Icon): void
      public addStyle(arg0: java.lang.String, arg1: javax.swing.text.Style): javax.swing.text.Style
      public removeStyle(arg0: java.lang.String): void
      public getStyle(arg0: java.lang.String): javax.swing.text.Style
      public setLogicalStyle(arg0: javax.swing.text.Style): void
      public getLogicalStyle(): javax.swing.text.Style
      public getCharacterAttributes(): javax.swing.text.AttributeSet
      public setCharacterAttributes(arg0: javax.swing.text.AttributeSet, arg1: boolean): void
      public getParagraphAttributes(): javax.swing.text.AttributeSet
      public setParagraphAttributes(arg0: javax.swing.text.AttributeSet, arg1: boolean): void
      public getInputAttributes(): javax.swing.text.MutableAttributeSet
      protected readonly getStyledEditorKit(): javax.swing.text.StyledEditorKit
      protected createDefaultEditorKit(): javax.swing.text.EditorKit
      public readonly setEditorKit(arg0: javax.swing.text.EditorKit): void
      protected paramString(): java.lang.String
    }

  }
}
