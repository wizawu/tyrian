declare namespace javax {
  namespace swing {
    namespace text {

      abstract class TableView extends javax.swing.text.BoxView {
        columnSpans: int[]
        columnOffsets: int[]
        totalColumnRequirements: javax.swing.SizeRequirements
        columnRequirements: javax.swing.SizeRequirements[]
        rows: java.util.Vector<javax.swing.text.TableView$TableRow>
        gridValid: boolean
        public constructor(arg0: javax.swing.text.Element)
        protected createTableRow(arg0: javax.swing.text.Element): javax.swing.text.TableView$TableRow
        protected createTableCell(arg0: javax.swing.text.Element): javax.swing.text.TableView$TableCell
        getColumnCount(): number
        getColumnSpan(arg0: number | java.lang.Integer): number
        getRowCount(): number
        getRowSpan(arg0: number | java.lang.Integer): number
        getRow(arg0: number | java.lang.Integer): javax.swing.text.TableView$TableRow
        getColumnsOccupied(arg0: javax.swing.text.View): number
        getRowsOccupied(arg0: javax.swing.text.View): number
        invalidateGrid(): void
        protected forwardUpdate(arg0: javax.swing.event.DocumentEvent$ElementChange, arg1: javax.swing.event.DocumentEvent, arg2: java.awt.Shape, arg3: javax.swing.text.ViewFactory | javax.swing.text.ViewFactory$$lambda): void
        public replace(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: javax.swing.text.View[]): void
        updateGrid(): void
        addFill(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
        protected layoutColumns(arg0: number | java.lang.Integer, arg1: number[] | java.lang.Integer[], arg2: number[] | java.lang.Integer[], arg3: javax.swing.SizeRequirements[]): void
        protected layoutMinorAxis(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number[] | java.lang.Integer[], arg3: number[] | java.lang.Integer[]): void
        protected calculateMinorAxisRequirements(arg0: number | java.lang.Integer, arg1: javax.swing.SizeRequirements): javax.swing.SizeRequirements
        calculateColumnRequirements(arg0: number | java.lang.Integer): void
        checkSingleColumnCell(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: javax.swing.text.View): void
        checkMultiColumnCell(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: javax.swing.text.View): void
        protected getViewAtPosition(arg0: number | java.lang.Integer, arg1: java.awt.Rectangle): javax.swing.text.View
      }

    }
  }
}
