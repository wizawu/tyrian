declare namespace java {
  namespace util {

    class Spliterators {

      public static emptySpliterator<T>(): java.util.Spliterator<T>
      public static emptyIntSpliterator(): java.util.Spliterator$OfInt
      public static emptyLongSpliterator(): java.util.Spliterator$OfLong
      public static emptyDoubleSpliterator(): java.util.Spliterator$OfDouble
      public static spliterator<T>(arg0: java.lang.Object[], arg1: int): java.util.Spliterator<T>
      public static spliterator<T>(arg0: java.lang.Object[], arg1: int, arg2: int, arg3: int): java.util.Spliterator<T>
      public static spliterator(arg0: int[], arg1: int): java.util.Spliterator$OfInt
      public static spliterator(arg0: int[], arg1: int, arg2: int, arg3: int): java.util.Spliterator$OfInt
      public static spliterator(arg0: long[], arg1: int): java.util.Spliterator$OfLong
      public static spliterator(arg0: long[], arg1: int, arg2: int, arg3: int): java.util.Spliterator$OfLong
      public static spliterator(arg0: double[], arg1: int): java.util.Spliterator$OfDouble
      public static spliterator(arg0: double[], arg1: int, arg2: int, arg3: int): java.util.Spliterator$OfDouble
      public static spliterator<T>(arg0: java.util.Collection<T>, arg1: int): java.util.Spliterator<T>
      public static spliterator<T>(arg0: java.util.Iterator<T>, arg1: long, arg2: int): java.util.Spliterator<T>
      public static spliteratorUnknownSize<T>(arg0: java.util.Iterator<T>, arg1: int): java.util.Spliterator<T>
      public static spliterator(arg0: java.util.PrimitiveIterator$OfInt, arg1: long, arg2: int): java.util.Spliterator$OfInt
      public static spliteratorUnknownSize(arg0: java.util.PrimitiveIterator$OfInt, arg1: int): java.util.Spliterator$OfInt
      public static spliterator(arg0: java.util.PrimitiveIterator$OfLong, arg1: long, arg2: int): java.util.Spliterator$OfLong
      public static spliteratorUnknownSize(arg0: java.util.PrimitiveIterator$OfLong, arg1: int): java.util.Spliterator$OfLong
      public static spliterator(arg0: java.util.PrimitiveIterator$OfDouble, arg1: long, arg2: int): java.util.Spliterator$OfDouble
      public static spliteratorUnknownSize(arg0: java.util.PrimitiveIterator$OfDouble, arg1: int): java.util.Spliterator$OfDouble
      public static iterator<T>(arg0: java.util.Spliterator<T>): java.util.Iterator<T>
      public static iterator(arg0: java.util.Spliterator$OfInt): java.util.PrimitiveIterator$OfInt
      public static iterator(arg0: java.util.Spliterator$OfLong): java.util.PrimitiveIterator$OfLong
      public static iterator(arg0: java.util.Spliterator$OfDouble): java.util.PrimitiveIterator$OfDouble
    }

  }
}
