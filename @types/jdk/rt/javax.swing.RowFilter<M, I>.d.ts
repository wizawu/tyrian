declare namespace javax {
    namespace swing {
abstract class RowFilter<M, I> {
    public constructor()
    public static regexFilter<M, I>(arg0: java.lang.String | string, ...arg1: int[]): javax.swing.RowFilter<M, I>
    public static dateFilter<M, I>(arg0: javax.swing.RowFilter$ComparisonType, arg1: java.util.Date, ...arg2: int[]): javax.swing.RowFilter<M, I>
    public static numberFilter<M, I>(arg0: javax.swing.RowFilter$ComparisonType, arg1: java.lang.Number, ...arg2: int[]): javax.swing.RowFilter<M, I>
    public static orFilter<M, I>(arg0: java.lang.Iterable<javax.swing.RowFilter<M, I>>): javax.swing.RowFilter<M, I>
    public static andFilter<M, I>(arg0: java.lang.Iterable<javax.swing.RowFilter<M, I>>): javax.swing.RowFilter<M, I>
    public static notFilter<M, I>(arg0: javax.swing.RowFilter<M, I>): javax.swing.RowFilter<M, I>
    public include(arg0: javax.swing.RowFilter$Entry<M, I>): boolean
    public static class: java.lang.Class<any>
}

    }
}