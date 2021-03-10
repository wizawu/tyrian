declare namespace javax {
  namespace swing {
    namespace text {

      class ParagraphView extends javax.swing.text.FlowView implements javax.swing.text.TabExpander {
        protected firstLineIndent: int
        static i18nStrategy: java.lang.Class<unknown>
        static tabChars: char[]
        static tabDecimalChars: char[]
        public constructor(arg0: javax.swing.text.Element)
        protected setJustification(arg0: number | java.lang.Integer): void
        protected setLineSpacing(arg0: number | java.lang.Float): void
        protected setFirstLineIndent(arg0: number | java.lang.Float): void
        protected setPropertiesFromAttributes(): void
        protected getLayoutViewCount(): number
        protected getLayoutView(arg0: number | java.lang.Integer): javax.swing.text.View
        protected getNextNorthSouthVisualPositionFrom(arg0: number | java.lang.Integer, arg1: javax.swing.text.Position$Bias, arg2: java.awt.Shape, arg3: number | java.lang.Integer, arg4: javax.swing.text.Position$Bias[]): number
        protected getClosestPositionTo(arg0: number | java.lang.Integer, arg1: javax.swing.text.Position$Bias, arg2: java.awt.Shape, arg3: number | java.lang.Integer, arg4: javax.swing.text.Position$Bias[], arg5: number | java.lang.Integer, arg6: number | java.lang.Integer): number
        protected flipEastAndWestAtEnds(arg0: number | java.lang.Integer, arg1: javax.swing.text.Position$Bias): boolean
        public getFlowSpan(arg0: number | java.lang.Integer): number
        public getFlowStart(arg0: number | java.lang.Integer): number
        protected createRow(): javax.swing.text.View
        public nextTabStop(arg0: number | java.lang.Float, arg1: number | java.lang.Integer): number
        protected getTabSet(): javax.swing.text.TabSet
        protected getPartialSize(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): number
        protected findOffsetToCharactersInString(arg0: string[] | java.lang.Character[], arg1: number | java.lang.Integer): number
        protected getTabBase(): number
        public paint(arg0: java.awt.Graphics, arg1: java.awt.Shape): void
        public getAlignment(arg0: number | java.lang.Integer): number
        public breakView(arg0: number | java.lang.Integer, arg1: number | java.lang.Float, arg2: java.awt.Shape): javax.swing.text.View
        public getBreakWeight(arg0: number | java.lang.Integer, arg1: number | java.lang.Float): number
        protected calculateMinorAxisRequirements(arg0: number | java.lang.Integer, arg1: javax.swing.SizeRequirements): javax.swing.SizeRequirements
        public changedUpdate(arg0: javax.swing.event.DocumentEvent, arg1: java.awt.Shape, arg2: javax.swing.text.ViewFactory | javax.swing.text.ViewFactory$$lambda): void
      }

    }
  }
}
