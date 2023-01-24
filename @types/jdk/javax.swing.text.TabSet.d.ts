declare namespace javax {
  namespace swing {
    namespace text {
      class TabSet implements java.io.Serializable {
        public constructor(arg0: javax.swing.text.TabStop[])
        public getTabCount(): number
        public getTab(arg0: number | java.lang.Integer): javax.swing.text.TabStop
        public getTabAfter(arg0: number | java.lang.Float): javax.swing.text.TabStop
        public getTabIndex(arg0: javax.swing.text.TabStop): number
        public getTabIndexAfter(arg0: number | java.lang.Float): number
        public equals(arg0: java.lang.Object | any): boolean
        public hashCode(): number
        public toString(): java.lang.String
      }
    }
  }
}
