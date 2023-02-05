declare namespace javax {
  namespace swing {
    abstract class RowFilter<M, I> {
      public constructor()
      public static regexFilter<M, I>(
        arg0: java.lang.String | string,
        ...vargs: (number | java.lang.Integer)[]
      ): javax.swing.RowFilter<M, I>
      public static dateFilter<M, I>(
        arg0: javax.swing.RowFilter$ComparisonType,
        arg1: java.util.Date,
        ...vargs: (number | java.lang.Integer)[]
      ): javax.swing.RowFilter<M, I>
      public static numberFilter<M, I>(
        arg0: javax.swing.RowFilter$ComparisonType,
        arg1: java.lang.Number,
        ...vargs: (number | java.lang.Integer)[]
      ): javax.swing.RowFilter<M, I>
      public static orFilter<M, I>(
        arg0: java.lang.Iterable<javax.swing.RowFilter<unknown, unknown>>
      ): javax.swing.RowFilter<M, I>
      public static andFilter<M, I>(
        arg0: java.lang.Iterable<javax.swing.RowFilter<unknown, unknown>>
      ): javax.swing.RowFilter<M, I>
      public static notFilter<M, I>(arg0: javax.swing.RowFilter<M, I>): javax.swing.RowFilter<M, I>
      public abstract include(arg0: javax.swing.RowFilter$Entry<M, I>): boolean
    }
  }
}
