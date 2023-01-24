declare namespace javax {
  namespace swing {
    class SpinnerListModel extends javax.swing.AbstractSpinnerModel implements java.io.Serializable {
      public constructor(arg0: java.util.List<unknown>)
      public constructor(arg0: java.lang.Object[] | any[])
      public constructor()
      public getList(): java.util.List<unknown>
      public setList(arg0: java.util.List<unknown>): void
      public getValue(): java.lang.Object
      public setValue(arg0: java.lang.Object | any): void
      public getNextValue(): java.lang.Object
      public getPreviousValue(): java.lang.Object
      findNextMatch(arg0: java.lang.String | string): java.lang.Object
    }
  }
}
