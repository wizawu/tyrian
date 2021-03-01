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
        getColumnCount(): int
        getColumnSpan(arg0: int): int
        getRowCount(): int
        getRowSpan(arg0: int): int
        getRow(arg0: int): javax.swing.text.TableView$TableRow
        getColumnsOccupied(arg0: javax.swing.text.View): int
        getRowsOccupied(arg0: javax.swing.text.View): int
        invalidateGrid(): void
        protected forwardUpdate(arg0: javax.swing.event.DocumentEvent$ElementChange, arg1: javax.swing.event.DocumentEvent, arg2: java.awt.Shape, arg3: javax.swing.text.ViewFactory): void
        public replace(arg0: int, arg1: int, arg2: javax.swing.text.View[]): void
        updateGrid(): void
        addFill(arg0: int, arg1: int): void
        protected layoutColumns(arg0: int, arg1: int[], arg2: int[], arg3: javax.swing.SizeRequirements[]): void
        protected layoutMinorAxis(arg0: int, arg1: int, arg2: int[], arg3: int[]): void
        protected calculateMinorAxisRequirements(arg0: int, arg1: javax.swing.SizeRequirements): javax.swing.SizeRequirements
        calculateColumnRequirements(arg0: int): void
        checkSingleColumnCell(arg0: int, arg1: int, arg2: javax.swing.text.View): void
        checkMultiColumnCell(arg0: int, arg1: int, arg2: int, arg3: javax.swing.text.View): void
        protected getViewAtPosition(arg0: int, arg1: java.awt.Rectangle): javax.swing.text.View
      }

    }
  }
}
