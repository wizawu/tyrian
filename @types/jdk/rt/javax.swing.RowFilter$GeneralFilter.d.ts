declare namespace javax {
    namespace swing {
        abstract class RowFilter$GeneralFilter extends javax.swing.RowFilter<java.lang.Object, java.lang.Object> {
            public include(arg0: javax.swing.RowFilter$Entry<java.lang.Object, java.lang.Object>): boolean
            protected abstract include(arg0: javax.swing.RowFilter$Entry<java.lang.Object, java.lang.Object>, arg1: int): boolean
            public static class: java.lang.Class<any>
        }
        interface RowFilter$GeneralFilter$$Lambda extends javax.swing.RowFilter<java.lang.Object, java.lang.Object> {
            (arg0: javax.swing.RowFilter$Entry<java.lang.Object, java.lang.Object>, arg1: int): boolean
        }
    }
}