declare namespace javax {
  namespace xml {
    namespace crypto {
      interface NodeSetData<T> extends javax.xml.crypto.Data, java.lang.Iterable<T> {
        iterator(): java.util.Iterator<T>
      }
    }
  }
}
