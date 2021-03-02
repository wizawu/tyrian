declare namespace javax {
  namespace swing {
    namespace text {

      class DefaultHighlighter extends javax.swing.text.LayeredHighlighter {
        public static readonly DefaultPainter: javax.swing.text.LayeredHighlighter$LayerPainter
        public constructor()
        public paint(arg0: java.awt.Graphics): void
        public install(arg0: javax.swing.text.JTextComponent): void
        public deinstall(arg0: javax.swing.text.JTextComponent): void
        public addHighlight(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: javax.swing.text.Highlighter$HighlightPainter | javax.swing.text.Highlighter$HighlightPainter$$lambda): java.lang.Object
        public removeHighlight(arg0: java.lang.Object | any): void
        public removeAllHighlights(): void
        public changeHighlight(arg0: java.lang.Object | any, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): void
        public getHighlights(): javax.swing.text.Highlighter$Highlight[]
        public paintLayeredHighlights(arg0: java.awt.Graphics, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: java.awt.Shape, arg4: javax.swing.text.JTextComponent, arg5: javax.swing.text.View): void
        public setDrawsLayeredHighlights(arg0: boolean | java.lang.Boolean): void
        public getDrawsLayeredHighlights(): boolean
      }

    }
  }
}
